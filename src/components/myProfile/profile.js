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

export default function ProfileCard(params) {
    const {id} = useParams()

    const comProps = {
        // title: props.title || '',
        Image: team,
        name: params.data.firstName +' '+params.data.lastName || '',
        telephone: params.data.telephone || '',
        
        // price:{data}.price || '',
        // permit: {data}.permit || '',
        // address: {data}.address || '',
        // description: {data}.description || '',
        // products:{data}.products || '',
        
    }
    

    
    return (
        <Card>
            <div className="flex flex-wrap justify-center">
                <div className="w-48 px-4 -mt-24">
                    <Image src={comProps.Image} rounded raised />
                </div>
                <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
                    
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                        {comProps.telephone}
                        </span>
                        <span className="text-sm text-gray-700">Telephone</span>
                    </div>
                    {/* <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                       123
                        </span>
                        <span className="text-sm text-gray-700">Permit Number</span>
                    </div> */}
                </div>
            </div>
            <div className="text-center">
                <H5 color="gray">{comProps.name}</H5>
                
                
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
