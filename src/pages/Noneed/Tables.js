import StatusCard from 'components/StatusCard';
import React from 'react';
import TableCard from 'components/TableCard';
import {useParams} from "react-router"
import {genApi} from '../../api/index'

export default function Dashboard() {
    // const {id} = useParams()

    // const [Product, setProduct] = React.useState({});
    //     React.useEffect(async () => {
    //         try{
    //         const result = await genApi.getProduct(id);
    //         const testProduct = {...result.data.data}
    //         setProduct(testProduct)
    //         }catch(e){
    //         console.log(e)
    //         }
            
    //     },[]);

    const {id} = useParams()
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

        console.log(vendor.products)



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
                        <TableCard data={vendor.products}/>
                    </div>
                </div>
            </div>
        </>
    );
}
