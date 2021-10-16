import React from 'react'

import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';

export default function DashboardCard() {
   
 
    return (
        <Card>
           
            <CardBody>
                {/* <div className="border-t border-lightBlue-200 text-center px-2 "> */}
                <span className="text-xl text-center block  tracking-wide text-gray-900">
                        This is the admin panel for 'OnTheWay' online vendor app.<br></br> This platform can be used to manage all the administrative purposes.<br></br>
                        Only the authorized admins use this web site.
                        </span>
                {/* </div> */}
            </CardBody>
            <CardFooter>

               
            </CardFooter>

                    
        </Card>
    );
}
