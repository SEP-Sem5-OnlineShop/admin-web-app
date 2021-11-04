import React from 'react';
import ProfileCard from '../../components/myProfile/profile';
import { useSelector } from "react-redux"

import {genApi} from '../../api/index'


export default function Profile() {
    const Id = useSelector(state => state.user.userData._id)
    console.log(Id)
    console.log(Id)
    

        
        
        const [vendor, setVendor] = React.useState({});
        React.useEffect(async () => {
            try{
            const result = await genApi.getAdmin(Id);
            const testVendor = {...result.data.data}
            
            setVendor(testVendor)
            }catch(e){
            console.log(e)
            }
            
        },[]);
        console.log(vendor)
    

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
                        
                        <ProfileCard data={vendor}/>
                        
                    </div>
                    

                    
                </div>
            </div>
        </>
    );
}
