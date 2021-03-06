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

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default function RegisterVendor() {
    const [files, setFiles] = React.useState([])
    const formik = useFormik({
        initialValues: {
            name: '',
            telephoneNumber: '',
            nicNumber: '',
            region: '',
            permitId: '',
            shopName: '',
            address: '',
            vehicles: '1',
            vehicleNo1: '',
            vehicleNo2: '',

        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            telephoneNumber: Yup.string()
                .required('Required')
                .matches('^(?:0|94|\\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\\d)\\d{6}$',
                    'Telephone number did not matched with requirements!'),
            nicNumber: Yup.string()
                .required('Required'),
            region: Yup.string()
                .required('Required'),
            permitId: Yup.string()
                .required('Required'),
            shopName: Yup.string()
                .required('Required'),
            address: Yup.string()
                .required('Required'),
            vehicleNo1: Yup.string()
                .required('Required'),
            vehicleNo2: Yup.string()
                .required('Required'),
        }),
        onSubmit: async values => {
            // await dispatch(thunks.user.localSignIn(values.telephone, values.password))
            console.log(values)
        },
    });
    return (
        <div className="p-6">
            <div className="mb-8">
                <span className="text-2xl font-medium">Register a New Vendor</span>
            </div>
            <form className="mt-8">
                <Card>
                    <div color="lightBlue" size="sm">
                        <span className="text-xl font-medium">General Details</span>
                    </div>
                    <CardBody>
                        <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                            <InputWithValidation 
                                formik={formik}
                                id="name"
                                name="name"
                                label="Name"
                                type="text"
                            />
                            <InputWithValidation 
                                formik={formik}
                                id="telephoneNumber"
                                name="telephoneNumber"
                                label="Telephone Number"
                                type="text"
                            />
                            <InputWithValidation
                                formik={formik}
                                id="nicNumber"
                                name="nicNumber"
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
                                id="shopName"
                                name="shopName"
                                label="Product Type"
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
                                id="region"
                                name="region"
                                label="Region to be Covered"
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
                                id="vehicleNo1"
                                name="vehicleNo1"
                                label="Vehicle Number 1"
                                type="text"
                            />
                            <InputWithValidation 
                                formik={formik}
                                id="vehicleNo2"
                                name="vehicleNo2"
                                label="Vehicle Number 2"
                                type="text"
                            />
                            <InputWithValidation
                                formik={formik}
                                id="vehicleNo3"
                                name="vehicleNo3"
                                label="Vehicle Number 3"
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
                <div className="flex justify-end mt-4">
                    <Button
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
            </form>
        </div>
    )
}