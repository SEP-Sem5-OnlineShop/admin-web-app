import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";

import InputWithValidation from "components/form-comps/input-with-validation";
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import {genApi} from '../../../api/index'
import {useParams} from "react-router"
import { string } from "yup/lib/locale";
import { waitFor } from "@testing-library/dom";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)



export default function RegisterVendor() {

    const [showSuccessfulModal, setshowSuccessfulModal] = React.useState(false);
    const [showRejectModal, setshowRejectModal] = React.useState(false);
    const [showFailedlModal, setshowFailedlModal] = React.useState(false);


        const {id} = useParams()
        
        const RejectRequest=()=>{
            console.log('reject function')
            if(genApi.rejectRequest(id)){
                setshowRejectModal(true)
            }else{
                setshowFailedlModal(true)
            }
        }
        

    const [files, setFiles] = React.useState([]);
        
    
    const formik = useFormik({
        initialValues: {
            fullName: '',
            telephone: '',
            nic: '',
            email:'g@gmail.com',
            address: '',
            permitId: '',
            regionToBeCovered: '',
            numberOfVehicles:1,
            plateNumber: '123',
            imageUrls: 'tt',


            vendor: [
                {
                    status: 'pending',
                },],
            
            shopName:'',
            password: 'User123#',
            

        },

        
            
        
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Required'),
            telephone: Yup.string()
                .required('Required')
                .matches('^(?:0|94|\\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\\d)\\d{6}$',
                    'Telephone number did not matched with requirements!'),
            nic: Yup.string()
                .required('Required'),
            regionToBeCovered: Yup.string()
                .required('Required'),
            permitId: Yup.string()
                .required('Required'),
            shopName: Yup.string()
                .required('Required'),
            address: Yup.string()
                .required('Required'),

                password: Yup.string()
                .required('Required')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                ),
           
        }),

        
        

        onSubmit: async values => {
            console.log(values.fullName)
            console.log("status update on: ",id)
            genApi.updateStatus(id)
            if(await genApi.createVendor({
                fullName: values.fullName,
                telephone: values.telephone,
                nic: values.nic,
                address: values.address,
                email: values.email,
                permitId: values.permitId,
                regionToBeCovered: values.regionToBeCovered,
                numberOfVehicles: values.numberOfVehicles,
                plateNumber: values.plateNumber,
                vendor: values.vendor,
                imageUrls: values.imageUrls,
                shopName: values.shopName,
                password: values.password,  })){setshowSuccessfulModal(true)}
                else{setshowFailedlModal(true)}
        },



        

    });

    const [vendor, setVendor] = React.useState([]);
    React.useEffect(async () => {
        try{
        const result = await genApi.getRequest(id);
        const testVendor = {...result.data.data}
        // console.log(result)
        setVendor(testVendor)
        Object.keys(
            testVendor
            ).forEach(item =>  {
                formik.setFieldValue(`${item}`, testVendor[item])
            })

        }catch(e){
        console.log(e)
        }
        
    },[]);

    
    return (
        <div className="p-6">
            <div className="mb-8">
                <span className="text-2xl font-medium">Register a New Vendor</span>
            </div>
            <form onSubmit={formik.handleSubmit} className="mt-8">
            {/* <form className="App" onSubmit={onSubmit()}> */}
                <Card>
                    <div color="lightBlue" size="sm">
                        <span className="text-xl font-medium">General Details</span>
                    </div>
                    <CardBody>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                            <InputWithValidation 
                                formik={formik}
                                id="fullName"
                                name="fullName"
                                label="Name"
                                type="text"
                               
                            />
                            <InputWithValidation 
                                formik={formik}
                                id="telephone"
                                name="telephone"
                                label="Telephone Number"
                                type="text"
                            />
                            <InputWithValidation
                                formik={formik}
                                id="nic"
                                name="nic"
                                label="NIC Number"
                                type="text"
                            />
                            <InputWithValidation
                                formik={formik}
                                id="address"
                                name="address"
                                label="Address"
                                type="text"
                            />
                            
                            <InputWithValidation
                                formik={formik}
                                id="permitId"
                                name="permitId"
                                label="Permit Id"
                                type="text"
                            />
                            <InputWithValidation
                                formik={formik}
                                id="regionToBeCovered"
                                name="regionToBeCovered"
                                label="Region to be Covered"
                                type="text"
                            />
                            <InputWithValidation
                                formik={formik}
                                id="email"
                                name="email"
                                label="Email"
                                type="text"
                            />

                            <InputWithValidation
                                formik={formik}
                                id="status"
                                name="status"
                                label="status"
                                type="text"
                            />
                            <InputWithValidation 
                                formik={formik}
                                id="shopName"
                                name="shopName"
                                label="shop Name"
                                type="text"
                               
                            />
                            <InputWithValidation 
                                formik={formik}
                                id="password"
                                name="password"
                                label="Password"
                                type="text"
                               
                            />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mt-8">
                    <div color="lightBlue" size="sm">
                        <span className="text-xl font-medium">Vehicle Details</span>
                    </div>
                    <CardBody>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                            <InputWithValidation 
                                formik={formik}
                                id="numberOfVehicles"
                                name="numberOfVehicles"
                                label="number Of Vehicles"
                                type="text"
                               
                            /> 
                            <InputWithValidation 
                                formik={formik}
                                id="plateNumber"
                                name="plateNumber"
                                label="plate Number"
                                type="text"
                            />
                            
                        </div>
                        <div className="mt-4">
                            <label className='font-medium text-secondary text-sm xs:text-lg md:text-base'>Vehicle Images</label>
                            <FilePond
                                files={files}
                                onupdatefiles={setFiles}
                                allowMultiple={true}
                                maxFiles={3}
                                server="/api"
                                name="files"
                                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                            />
                        </div>
                    </CardBody>
                </Card>
                <div className="flex justify-center w-full">
                <div className="flex justify-center mt-4 mr-4">
                    <Button 
                        type="submit"
                        id="Submit"
                        color="lightBlue"
                        buttonType="filled"
                        size="regular"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                    >
                        Submit
                    </Button>
                    
                    </div>
                    </div>
                    </form>
                    <div className="flex justify-center w-full">
                <div className="flex justify-center mt-4 mr-4">
                    <Button onClick={RejectRequest}
                        id="Reject"
                        // type="submit"
                        color="lightBlue"
                        buttonType="filled"
                        size="regular"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                    >
                        Reject
                    </Button>
                    </div>
                </div>


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
                    Successfully added as a vendor!!!!!!!!!
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



{showRejectModal ? (
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
                    This vendor request is successfully rejected....
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowRejectModal(false)}
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
            
        
    )
}