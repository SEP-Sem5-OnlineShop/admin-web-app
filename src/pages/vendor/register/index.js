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
// function Values(){
//     const {id} = useParams()
//         // console.log(id)

        
//         const [vendor, setVendor] = React.useState([]);
//         React.useEffect(async () => {
//             try{
//             const result = await genApi.getRequest(id);
//             const testVendor = {...result.data.data}
//             // console.log(result)
//             setVendor(testVendor)
//             }catch(e){
//             console.log(e)
//             }
            
//         },[]);

//         return vendor
//         ;
// }

export default function RegisterVendor() {
        const {id} = useParams()
        // console.log(id)

        
        
        

    const [files, setFiles] = React.useState([]);
        
    // console.log(Values())
    // const n='kk';
    // console.log(typeof(n))
    // console.log(n)
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
            // plateNumber2: '',
            imageUrls: 'tt',
            // vehicles: '1',

            vendor: [
                {
                    status: 'pending',
                },],
            
            shopName:'',
            password: 'OnTheWay@1234',
            
             // createdAt:Date().toLocaleString(),
            // vehicleNo2: '',

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
            // vehicleNumber: Yup.string()
            //     .required('Required'),
            // vehicleNo2: Yup.string()
            //     .required('Required'),
        }),
        onSubmit: async values => {
            console.log(values.fullName)
            await genApi.createVendor({
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
                password: values.password,


                
                
            })
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
                // console.log(item)
                formik.setFieldValue(`${item}`, testVendor[item])
            })

        }catch(e){
        console.log(e)
        }
        
    },[]);

    //  console.log(vendor)
    

    
    return (
        <div className="p-6">
            <div className="mb-8">
                <span className="text-2xl font-medium">Register a New Vendor</span>
            </div>
            <form onSubmit={
                formik.handleSubmit
                } className="mt-8">
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
                            {/* <InputWithValidation
                                formik={formik}
                                id="shopName"
                                name="shopName"
                                label="Product Type"
                                type="text"
                            /> */}
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
                                // value="234"
                            /> 
                            <InputWithValidation 
                                formik={formik}
                                id="plateNumber"
                                name="plateNumber"
                                label="plate Number"
                                type="text"
                            />
                            {/* <InputWithValidation
                                formik={formik}
                                id="vehicleNumber2"
                                name="vehicleNumber2"
                                label="vehicle Number 2"
                                type="text"
                            /> */}
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
                <div className="flex justify-center w-3/5">
                <div className="flex justify-between mt-4 mr-4">
                    <Button type="submit"
                        
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
                    <div className="flex justify-between mt-4 ml-4">
                    <Button type="submit"
                        id="Reject"
                        
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
            </form>
        </div>
    )
}