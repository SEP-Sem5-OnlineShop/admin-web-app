import React from 'react';
import { CSVLink } from "react-csv";

import {genApi} from '../../api/index'


export default function DailyVendor() {
    const [vendors, setVendors] = React.useState( [] );

  React.useEffect(async () => {
    try{
      const result = await genApi.getRequests();
 
      setVendors(result.data.data);
      
    }catch(e){
      console.log(e)
    }
    
  },[]);

  

const header = [
    ["firstname"],[ "lastname"], ["email"],["telephone"],["nic"], ["address"],["shop name"],["date"]
    
  ];

    const csvData = [
      
        header,
 
      ];
      var myCurrentDate = new Date();
      var date = myCurrentDate.getFullYear()+'-'+(myCurrentDate.getMonth()+1)+'-'+myCurrentDate.getDate() ;
      
      
  for(let index = 0; index < vendors.length; index++) {
    const element = vendors[index];
    const vendor=[];
    
    if(date===((element.created_at.substr(0,10)).toString())){
    
    vendor.push((element.firstName).toString())
    vendor.push((element.lastName).toString())
    vendor.push((element.email).toString())
    vendor.push((element.telephone).toString())
    vendor.push((element.nic).toString())
    vendor.push((element.address).toString())
    vendor.push(element.shopName)
    vendor.push((element.created_at.substr(0,10)).toString())
    
    csvData.push(vendor);
    }
  }
      
      
    return (
        <>
        <div>
        <li><CSVLink data={csvData}>
                Vendor Request Details - Today
            </CSVLink></li>
        </div>
            
            
        </>
    );
}
