import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";

import InputWithValidation from "components/form-comps/input-with-validation";
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import { genApi } from '../../../api/index'
import { useParams } from "react-router"
import FileUploaderWithPreview from "../../../components/file-uploader/with-preview"

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)



export default function RegisterVendor() {

    const [showSuccessfulModal, setshowSuccessfulModal] = React.useState(false);
    const [showRejectModal, setshowRejectModal] = React.useState(false);
    const [showFailedlModal, setshowFailedlModal] = React.useState(false);
    const [array, setArray] = React.useState(["1"])
    const [formikValues, setFormikValues] = React.useState({
        firstName: '',
        lastName: '',
        telephone: '',
        email1: '',
        nic: '',
        regionToBeCovered: '',
        permitId: '',
        shopName: '',
        address: '',
        numberOfVehicles: '1',
        vehicles: [
            {
                plateNumber: '',
                brand: '',
                model: '',
                imageUrl: '',
                documentUrl: ''
            },
            {
                plateNumber: '',
                brand: '',
                model: '',
                imageUrl: '',
                documentUrl: ''
            },
            {
                plateNumber: '',
                brand: '',
                model: '',
                imageUrl: '',
                documentUrl: ''
            },
        ]
    })


    const { id } = useParams()

    const RejectRequest = () => {
        console.log('reject function')
        if (genApi.rejectRequest(id)) {
            setshowRejectModal(true)
        } else {
            setshowFailedlModal(true)
        }
    }


    const [files, setFiles] = React.useState([]);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: formikValues,
        onSubmit: async values => {
            const vehicles = []
            values.vehicles.forEach(item => {
                if(item.plateNumber) {
                    vehicles.push(item)
                }
            })
            console.log(vehicles)
            console.log(values.fullName)
            console.log("status update on: ", id)
            // genApi.updateStatus(id)
            try {
                
                const {data, status} = await genApi.createVendor(
                    {
                        firstName: values.firstName,
                        lastName: values.lastName,
                        telephone: values.telephone,
                        address: values.address,
                        email: values.email,
                        role: "vendor",
                        vendor: {
                            nic: values.nic,
                            imageUrl: values.imageUrl,
                            permitNumber: values.permitId,
                            permitNumber: 'empty for now',
                            regionToBeCovered: values.regionToBeCovered,
                            shopName: values.shopName,
                            address: values.address,
                            vehicles: vehicles,
                            status:'accepted'
                        },
                        shopName: values.shopName,
                        // password: values.password,  
                    })
                    genApi.updateStatus(id)
                if (status === 201) {
                    setshowSuccessfulModal(true)
    
                }
                else { setshowFailedlModal(true) }
            }
            catch(e) {

            }
        },
    });

    const [vendor, setVendor] = React.useState([]);
    React.useEffect(async () => {
        try {
            const { data, status } = await genApi.getRequest(id);
            if (status === 200 && data.data) {
                setFormikValues(data.data)
            }
            // const testVendor = { ...result.data.data }
            // console.log(result)
            // setVendor(testVendor)
            // Object.keys(
            //     testVendor
            // ).forEach(item => {
            //     // formik.setFieldValue(`${item}`, testVendor[item])
            // })
            let array = []
            for (let i = 1; i < parseInt(data.data.numberOfVehicles || 0) + 1; i++) {
                array.push(i)
            }
            setArray(array)
        } catch (e) {
            console.log(e)
        }

    }, []);

    const setImageName = (fieldName, fileName) => {
        formik.setFieldValue(fieldName, fileName)
    }


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
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                type="text"

                            />
                            <InputWithValidation
                                formik={formik}
                                id="lastName"
                                name="lastName"
                                label="Last Name"
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
                                id="email"
                                name="email"
                                label="Email"
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
                                id="shopName"
                                name="shopName"
                                label="Shop Name"
                                type="text"
                            />
                            <InputWithValidation
                                formik={formik}
                                id="permitId"
                                name="permitId"
                                label="shop Name"
                                type="text"
                            />
                            <InputWithValidation
                                formik={formik}
                                id="numberOfVehicles"
                                name="numberOfVehicles"
                                label="Number of vehicles"
                                type="text"
                            />
                            {/* <InputWithValidation 
                                formik={formik}
                                id="password"
                                name="password"
                                label="Password"
                                type="text"
                               
                            /> */}
                        </div>
                        <div className="my-4">
                            <span className="text-lg font-medium">Image Thumbnail for the main website</span>
                            <FileUploaderWithPreview
                                label={'Upload your an image thumbnail here'}
                                imageUrl={formik.values.imageUrl || ""}
                                formikFieldName={'imageUrl'}
                                setFileName={setImageName}
                            />
                        </div>
                    </CardBody>
                </Card>
                <Card className="mt-8">
                    <div color="lightBlue" size="sm">
                        <span className="text-xl font-medium">Vehicle Details</span>
                    </div>
                    <CardBody>
                        {
                            array.map((item, index) => {
                                return <div key={index}>
                                    <span className="font-medium mb">Vehicle #{index} Details</span>
                                    <InputWithValidation
                                        formik={formik}
                                        id={`vehicles.${index}.brand`}
                                        name={`vehicles.${index}.brand`}
                                        label="Vehicle Brand"
                                        className="mb-2 mt-1"
                                        labelStyles={{ fontSize: 14 }}
                                        value={formik.values.vehicles[index] ? formik.values.vehicles[index].brand : ""}
                                    />
                                    <InputWithValidation
                                        formik={formik}
                                        id={`vehicles.${index}.model`}
                                        name={`vehicles.${index}.model`}
                                        label={`Vehicle Model`}
                                        className="mb-2"
                                        labelStyles={{ fontSize: 14 }}
                                        value={formik.values.vehicles[index] ? formik.values.vehicles[index].model : ""}
                                    />
                                    <InputWithValidation
                                        formik={formik}
                                        id={`vehicles.${index}.plateNumber`}
                                        name={`vehicles.${index}.plateNumber`}
                                        value={formik.values.vehicles[index] ? formik.values.vehicles[index].plateNumber : ""}
                                        label={`Plate Number`}
                                        className="mb-2"
                                        labelStyles={{ fontSize: 14 }}
                                    />
                                    <label className='font-medium text-secondary text-sm xs:text-lg md:text-base'>Image of clear view of the vehicle</label>
                                    {/* <FileUploader allowMultiple={false} files={image} setFiles={setImage} maxFiles={1} /> */}
                                    <FileUploaderWithPreview
                                        label={'Upload your an image here'}
                                        imageUrl={formik.values.vehicles[index].imageUrl}
                                        formikFieldName={`vehicles.${index}.imageUrl`}
                                        setFileName={setImageName}
                                    />
                                    {/* <label className='font-medium text-secondary text-sm xs:text-lg md:text-base'>Vehicle license file here</label>
                                    <FileUploader allowMultiple={false} files={document} setFiles={setDocument} maxFiles={1} /> */}
                                </div>
                            })
                        }
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