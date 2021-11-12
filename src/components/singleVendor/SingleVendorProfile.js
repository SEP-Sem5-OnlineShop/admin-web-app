import React from 'react'

import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import Image from '@material-tailwind/react/Image';
import H5 from '@material-tailwind/react/Heading5';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import { getFileUrl } from "../../api/azure-storage-blob";

import {genApi} from '../../api/index'
import {useParams} from "react-router"




export default function ProfileCard(params) {

    const [showSuccessfulModal, setshowSuccessfulModal] = React.useState(false);
    const [showFailedlModal, setshowFailedlModal] = React.useState(false);
    const {id} = useParams()
    // console.log('this is:' ,id);
    const HandleClick=() =>{
        if(genApi.removeVendor(id)){
            {setshowSuccessfulModal(true)}
        }else{
            {setshowFailedlModal(true)}
        }
    }
    
    const comProps = {

        Image: params.data.vendor ? getFileUrl(params.data.vendor.imageUrl)||'':'',
        name: params.data.firstName || '',
        telephone: params.data.telephone || '',
        coordinates: params.data.coordinates || '',
        vendor:params.data.vendor||'',
        status:params.data.vendor ? params.data.vendor.status || "" : "",
        permitNumber:params.data.vendor ? params.data.vendor.permitNumber || "" : "",
        
        
    }

    // console.log(params.data.vendor ? params.data.vendor.permitNumber || "" : "")

    const status = comProps.status;
    let button;
    if (status=='accepted') {
      button = 
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
  </Button>;
    } else {
      button = <div></div>;
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
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                        {comProps.permitNumber}
                        
                        </span>
                        <span className="text-sm text-gray-700">Permit Number</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <H5 color="gray">{comProps.name}</H5>
                <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <Icon name="place" size="xl" />
                    
                    Gampaha
                    
                    
                </div>
                
            </div>
            <CardBody>
                <div className="border-t border-lightBlue-200 text-center px-2 ">
                    
                Healthy eating means eating a variety of foods that give you the nutrients you need to maintain your health, feel good, and have energy.
                </div>
            </CardBody>
            <CardFooter>

                    
                        <div className="w-full flex justify-center -mt-8">

                        <a
                            
                            className="mt-5"
                            
                            onClick={HandleClick}
                        >
                            {button}
                            
                        </a>
    
                        {showSuccessfulModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Successfully removed!!!!!!!!!!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowSuccessfulModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

{showFailedlModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    This is a bad request!!!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowFailedlModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                        
                    </div>
                    
                    

                
            </CardFooter>

                    
        </Card>

        
    );
}
