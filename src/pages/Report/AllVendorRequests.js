import React from 'react';
import { CSVLink } from "react-csv";
import {genApi} from '../../api/index'


export default function AllRequests() {
    const [vendors, setVendors] = React.useState( [] );

  React.useEffect(async () => {
    try{
      const result = await genApi.getRequests();
 
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
    ["firstname"],[ "lastname"], ["email"],["telephone"],["nic"], ["address"],["shop name"],["date"]
    
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
    vendor.push((element.nic).toString())
    vendor.push((element.address).toString())
    vendor.push(element.shopName)
    vendor.push((element.created_at.substr(0,10)).toString())
    console.log(vendor)
    csvData.push(vendor);
    
  }
      
      console.log(csvData)
    return (
        <>
        <div>
        <li><CSVLink data={csvData}>
                Vendor Request Details - all
            </CSVLink></li>
        </div>
            
            
        </>
    );
}
