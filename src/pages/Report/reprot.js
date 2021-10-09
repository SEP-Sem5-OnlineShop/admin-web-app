import React from 'react';
import { CSVLink } from "react-csv";
import { array } from 'yup';
import {genApi} from '../../api/index'



export default function Report() {
    const [vendors, setVendors] = React.useState( [] );

  React.useEffect(async () => {
    try{
      const result = await genApi.getVendors();
 
      setVendors(result.data.data);
      console.log(typeof(result.data))
      console.log(result.data)
    }catch(e){
      console.log(e)
    }
    
  },[]);

  console.log(vendors)
//   console.log(vendors ? vendors.vendor|| "" : "")
const header = [
    ["firstname"],[ "lastname"], ["email"],["telephone"],["shop name"], ["status"]
    
  ];

    const csvData = [
      // array={1,2,3};
        header,
        
        
        // ["firstname", "lastname", "email"],
        // ["Ahmed", "Tomi", "ah@smthing.co.com"],
        // ["Raed", "Labes", "rl@smthing.co.com"],
        // ["Yezzi", "Min l3b", "ymin@cocococo.com"]
      ];

      
  for(let index = 0; index < vendors.length; index++) {
    const element = vendors[index];
    const vendor=[];
    vendor.push((element.firstName).toString())
    vendor.push((element.lastName).toString())
    vendor.push((element.email).toString())
    vendor.push((element.telephone).toString())
    vendor.push((element.vendor.shopName).toString())
    vendor.push(element.vendor.status)
    console.log(vendor)
    csvData.push(vendor);
    
  }
      
      console.log(csvData)
    return (
        <>
        <div>
        <li><CSVLink data={csvData}>
                Vendor Details
            </CSVLink></li>
        </div>
            
            
        </>
    );
}
