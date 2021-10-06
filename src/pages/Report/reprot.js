import React from 'react';
import { CSVLink } from "react-csv";
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
    ["firstname"],[ "lastname"], ["email"],
    
  ];

    const csvData = [
        header,
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
      ];

      console.log(csvData)
    return (
        <>
            
            <li><CSVLink data={csvData}>
                Vendor Details
            </CSVLink></li>
        </>
    );
}
