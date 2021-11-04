import React from 'react'

import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';




export default function ProfileCard(params) {
    // const {id} = useParams()

    const comProps = {
        // title: props.title || '',
        // Image: team,
        name: params.data.firstName +' '+params.data.lastName || '',
        telephone: params.data.telephone || '',
        email: params.data.email || '',

        
    }
    

    
    return (
        <Card>
            <div className="flex flex-wrap justify-center">
                
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
                        <span className="text-l font-medium block lowercase tracking-wide text-gray-900">
                        {comProps.email}
                        </span>
                        
                    </div>
            <CardBody>
                <div className="border-t border-lightBlue-200 text-center px-2 ">
                    
                </div>
            </CardBody>
            <CardFooter>

               
            </CardFooter>

                    
        </Card>
    );
}
