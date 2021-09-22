import React from 'react'

import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import Image from '@material-tailwind/react/Image';
import H5 from '@material-tailwind/react/Heading5';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import Button from '@material-tailwind/react/Button';

import team from '../../assets/img/team-1-800x800.jpg';

import {genApi} from '../../api/index'
import {useParams} from "react-router"
import axios from 'axios';


// function Id(){
//     const {id} = useParams()
//     return id
//     console.log('this is:' ,id);}


// function HandleClick (id) {
    
//     React.useEffect(async () => {
//         try{
//             console.log('removed')
//         return await genApi.removeVendor(id);
//         // console.log(testVendor.products)
//         }catch(e){
//         console.log(e)
//         }
        
//     })
//   }

export default function ProfileCard() {
    // const {id} = useParams()
    // console.log('this is:' ,id);
    // const HandleClick=() =>{
    //     // event.preventDefault();
    //     genApi.removeVendor(id);
    // }
    
    // const comProps = {
    //     // title: props.title || '',
    //     Image: team,
    //     name: params.data.firstName || '',
    //     permitNumber: params.data.permitNumber || '',
    //     coordinates: params.data.coordinates || '',
    //     // price:{data}.price || '',
    //     // permit: {data}.permit || '',
    //     // address: {data}.address || '',
    //     // description: {data}.description || '',
    //     // products:{data}.products || '',
        
    // }

    
    return (
        <Card>
            <div className="flex flex-wrap justify-center">
                <div className="w-48 px-4 -mt-24">
                    <Image src='' rounded raised />
                </div>
                <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
                    
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                        LLL
                        </span>
                        <span className="text-sm text-gray-700">Rating</span>
                    </div>
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                       123
                        {/* {comProps.permit} */}
                        </span>
                        <span className="text-sm text-gray-700">Permit Number</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <H5 color="gray">kkk</H5>
                <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="place" size="xl" />
                    {/* {comProps.address} */}
                    {/* {comProps.coordinates} */}
                    jkld
                </div>
                
            </div>
            <CardBody>
                <div className="border-t border-lightBlue-200 text-center px-2 ">
                    {/* <LeadText color="blueGray">
                       {comProps.description}
                        {comProps.products.map((product)=>
                        <li key={product}>{product}</li>)}
                       
                    </LeadText> */}
                </div>
            </CardBody>
            <CardFooter>

                {/* <div className="w-full flex justify-center -mt-8">
                    

                    <a
                        // href="#removeVendor"
                        className="mt-5"
                        onClick={(e) => e.preventDefault()}
                        // onClick={HandleClick}
                    >
                        <Button
                            color="lightBlue"
                            buttonType="filled"
                            size="regular"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="light"
                        >
                            Remove the Vendor
                        </Button>
                    </a>

                    
                    
                </div> */}
            </CardFooter>

                    
        </Card>
    );
}
