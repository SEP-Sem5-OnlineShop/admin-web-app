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

export default function DashboardCard() {
   
        
        
    

    
    return (
        <Card>
            {/* <div className="flex flex-wrap justify-center">
                
                <div className="p-4 text-center">
                        <span className="text-4xl font-medium text-gray-700"><u>Admin Profile</u></span>
                    </div>
                <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">

                
                    
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                        {comProps.telephone}
                        </span>
                        <span className="text-sm text-gray-700">Telephone</span>
                    </div>
                    
                </div>
            </div>
            <div className="text-center">
                <H5 color="gray">{comProps.name}</H5>
                
                
            </div>

            <div className="p-4 text-center">
                        <span className="text-l font-medium block uppercase tracking-wide text-gray-900">
                        {comProps.email}
                        </span>
                        
                    </div> */}
            <CardBody>
                {/* <div className="border-t border-lightBlue-200 text-center px-2 "> */}
                <span className="text-l  block  tracking-wide text-gray-900">
                        This is the admin panel for 'OnTheWay' online vendor app. This platform can be used to manage all the administrative purposes.
                        
                        </span>
                {/* </div> */}
            </CardBody>
            <CardFooter>

               
            </CardFooter>

                    
        </Card>
    );
}
