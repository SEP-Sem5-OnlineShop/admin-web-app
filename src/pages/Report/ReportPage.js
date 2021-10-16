import React from 'react'

import Report from './reprot'
import DailyVendor from './DailyVendor'
import {genApi} from '../../api/index'
import AllRequests from './AllVendorRequests'
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';

function REport() {

 //////////////////////////////

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl  pb-6 justify-items-center mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-4xl text-center font-semibold"><u>Reports</u></h1>
        </div>
        <div className="mt-6 text-3xl">
        <Card>
           
           <CardBody>
              <Report />
            </CardBody>

            <br></br>

            <CardBody>
              <DailyVendor/>
            </CardBody>

            <br></br>

            <CardBody>
              <AllRequests/>

            </CardBody>
      

                    
        </Card>
        </div>
      </main>
    </div>
  );
}

export default REport;