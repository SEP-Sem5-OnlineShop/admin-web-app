import React from 'react'
import VComponenet from '../../components/vendorRequestComponent';
import bread from '../../src/assets/img/team-1-800x800.jpg';
import {genApi} from '../../api/index'


function VendorRequestList() {
    
  /////////////////////////////////////////

  const [vendorrequests, setVendorrequests] = React.useState( [] );

  React.useEffect(async () => {
    try{
      const result = await genApi.getRequests();
 
      setVendorrequests(result.data.data);
      // console.log(result.data)
    }catch(e){
      console.log(e)
    }
    
  },[]);


const data=[]
vendorrequests.map(vendorrequest => data.push({
  name: vendorrequest.firstName,
  telephone: vendorrequest.telephone,
  shop: vendorrequest.role,
  }))

  /////////////////////////////////////////
  

  return (
    
        <div className="container flex flex-col mx-auto px-2 sm:px-4 items-center justify-center">

            <h1 className='pb-4 sm:pb-6 pt-4 sm:pt-12 text-2xl sm:text-4xl'><b><u>Vendor Requests</u></b></h1>
            
            <ul className="flex flex-col">
            <VComponenet data={data} />
            {/* <VComponenet image={bread} name='John Perera' region='Gampaha' date='12/01/2021' />
            <VComponenet image={bread} name='John Perera' region='Gampaha' date='12/01/2021' />
            <VComponenet image={bread} name='John Perera' region='Gampaha' date='12/01/2021' /> */}

                
            </ul>
        </div>

     
  );
}

export default VendorRequestList;



