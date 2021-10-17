import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CSVLink } from "react-csv";
import { array } from 'yup';
import {genApi} from '../../api/index'
import {useParams} from "react-router"
import "react-datepicker/dist/react-datepicker.css";

function convert(str) {
    var mnths = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12"
      },
      date = str.split(" ");
  
    return [date[3], mnths[date[1]], date[2]].join("-");
  }

export default function VendorReport(){
  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  var sdate =(convert(startDate.toString()))
  var edate =(convert(EndDate.toString()))


  const [purchases, setpurchases] = React.useState( [] );

  React.useEffect(async () => {
    try{
      const result = await genApi.getVendorPurchaseList('613eb365af0d5b2c142fa326');
 
      setpurchases(result.data);
      console.log(typeof(result.data))
      console.log(result.data)
    }catch(e){
      console.log(e)
    }
    
  },[]);

  console.log(purchases)
const header = [
    ["vendor_id"],[ "totalItems"], ["totalCost"],["createdAt"],["discount"],[""],["Product id"]
    
  ];

    const csvData = [
        header,
      ];
      
      
      
  for(let index = 0; index < purchases.length; index++) {
    const element = purchases[index];
    const purchase=[];
    var date = (element.createdAt.substr(0,10))
    console.log(element.createdAt)
    console.log(element.products)
    console.log(sdate<=date && date<edate)
    if(sdate<=date && date<edate){
    
        purchase.push((element.vendor_id).toString())
        purchase.push((element.totalItems).toString())
        purchase.push((element.totalCost).toString())
        purchase.push((element.createdAt).toString())
        purchase.push((element.discount).toString())
        purchase.push((element.products.product_id))
        for(let i= 0; i< element.products.length; i++){
          purchase.push(element.products[i].product_id)
        }
    
    csvData.push(purchase);
    }
  }
      
      console.log(csvData)

  console.log(sdate);
  console.log(edate);
  return (
      <div>
          <div>
              Pick Start date:
          </div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

            <div>
              Pick End date:
          </div>
            <DatePicker selected={EndDate} onChange={(date) => setEndDate(date)} />
            <div>
<li><CSVLink data={csvData}>
                Vendor Request Details - Today
            </CSVLink></li>
</div>
    </div>


    
  );
};