import React from 'react';
import ProfileCard from '../../components/singleVendor/SingleVendorProfile';
import team from '../../assets/img/team-1-800x800.jpg';
import {genApi} from '../../api/index'
import {useParams} from "react-router"

export default function SingleVendor() {
        const {id} = useParams()
     /////////////////////////////////////////
    //  const data = genApi.getVendor(id);


        const [vendor, setVendor] = React.useState({});
        React.useEffect(async () => {
            try{
            const result = await genApi.getVendor(id);
            const testVendor = {...result.data.data}
            setVendor(testVendor)
            }catch(e){
            console.log(e)
            }
            
        },[]);
        // const data=[]
        // vendor.map(v => data.push({
        // name: v.firstName,
        // telephone: v.telephone,
        // shop: v.role,
        // }))

  /////////////////////////////////////////
  
    
    // const products=['Pizza','Burger','Bread'];

    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-4 mb-16">
                        {/* <ProfileCard data={data} products={products}/> */}
                        <ProfileCard data={vendor}/>
                    </div>
                </div>
            </div>
        </>
    );
}
