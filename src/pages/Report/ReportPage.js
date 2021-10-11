import React from 'react'

import Report from './reprot'
import DailyVendor from './DailyVendor'
import {genApi} from '../../api/index'
import AllRequests from './AllVendorRequests'


function REport() {

 //////////////////////////////

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl  pb-6 justify-items-center mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-4xl  font-semibold"><u>Reports</u></h1>
        </div>
        <div className="mt-6 text-3xl">
          
            <Report />
            <DailyVendor/>
            <AllRequests/>
        </div>
      </main>
    </div>
  );
}

export default REport;