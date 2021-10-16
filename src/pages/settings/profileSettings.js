import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FilePond } from 'react-filepond';
import InputWithValidation from "../../components/add-admin/input-with-validation/index";
import CardTemplate from '@material-tailwind/react/Card';
import { useDispatch, useSelector } from "react-redux";
import { getFileUrl } from "../../api/azure-storage-blob";
import {genApi,authApi} from '../../api/index'
// import { driverApi, authApi } from "../."
import { actions } from "../../store/index"
// import FileUploader from "../../../../components/file-uploader"

export default function ProfileSettings() {



        const userData = useSelector(state => state.user.userData) || {}
        const dispatch = useDispatch()
    
       
        const [disabled, setDisabled] = useState(true)
        const [passwordDisabled, setPasswordDisabled] = useState(true)
    
        const ref = useRef()
        const formik = useFormik({
            enableReinitialize: true,
            initialValues: userData || {
                firstName: '',
                lastName: '',
                telephone: '',
                email: '',
               
            },
            validationSchema: Yup.object({
                firstName: Yup.string()
                    .required('Required'),
                lastName: Yup.string()
                    .required('Required'),
                telephone: Yup.string()
                    .required('Required'),
                email: Yup.string()
                    .required('Required'),
                
            }),
            onSubmit: async values => {
                try {
                    const { data, status } = await genApi.updateAdmin(values)
                    if (status === 200 && data && data.message === "Success") {
                        console.log(data.data)
                    }
                }
                catch (e) {
                    try {
                        const { data, status } = await authApi.updatePassword({ password: values.password })
                        if (status === 200 && data && data.message === "Success") {
                            console.log(data.data)
                        }
                    }
                    catch (e) {
                        console.log(e.message)
                    }
                }
                // await dispatch(thunks.user.localSignIn(values.telephone, values.password))
            },
        });
    
    
        const formik2 = useFormik({
            initialValues: {
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
            },
            validationSchema: Yup.object({
                currentPassword: Yup.string()
                    .required('Required'),
                newPassword: Yup.string()
                    .required('Required')
                    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                    ),
                confirmPassword: Yup.string()
                    .required('Required').oneOf([Yup.ref('newPassword'), null], 'Password not matched!'),
            }),
            onSubmit: async values => {
                try {
                    const { data, status } = await authApi.updatePassword(values)
                    if (status === 200 && data && data.message === "Success") {
                        console.log(data.data)
                        setPasswordDisabled(true)
                        formik2.resetForm()
                    }
                }
                catch (e) {
                    console.log(e.message)
                }
                // await dispatch(thunks.user.localSignIn(values.telephone, values.password))
            },
        })
    
        
    
    
        return (
            <React.Fragment>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full text-3xl font-medium">My Account</div>
                    <div className="w-full lg:w-2/3 flex flex-col items-center justify-center p-0 lg:p-8">
                        <div className="w-full lg:w-1/3 mt-4 flex flex-col items-center">
                        </div>
                        <form className="w-full">
                            <CardTemplate>
                                <InputWithValidation
                                    formik={formik}
                                    label="First Name"
                                    id="firstName"
                                    name="firstName"
                                    disabled={disabled}
                                />
                                <InputWithValidation
                                    formik={formik}
                                    label="Last Name"
                                    id="lastName"
                                    name="lastName"
                                    disabled={disabled}
                                />
                                <InputWithValidation
                                    formik={formik}
                                    label="Telephone"
                                    id="telephone"
                                    name="telephone"
                                    disabled={true}
                                />
                                <InputWithValidation
                                    formik={formik}
                                    label="Email"
                                    id="email"
                                    name="email"
                                    disabled={true}
                                />
                                
                                <div className="mt-8 flex justify-end">
                                    {
                                        disabled ?
                                            <button onClick={(e) => { e.preventDefault(); setDisabled(false) }} type="button"
                                                className="rounded-lg p-2 text-black bg-textLight">Update Details</button> :
                                            <button onClick={(e) => { e.preventDefault(); formik.handleSubmit(); setDisabled(true) }} type="submit"
                                                className="rounded-lg p-2 text-black bg-textLight">Submit</button>
                                    }
                                </div>
                            </CardTemplate>
                        </form>
                        <CardTemplate>
                            <div className="">
                                {
                                    passwordDisabled ?
                                        <button onClick={(e) => { e.preventDefault(); setPasswordDisabled(false) }} type="button"
                                            className="rounded-lg p-2 text-black bg-textLight">Update Password</button> :
                                        <form>
                                            <div className="text-text font-medium">Password</div>
                                            <InputWithValidation
                                                formik={formik2}
                                                label="Current Password"
                                                id="currentPassword"
                                                name="currentPassword"
                                                disabled={passwordDisabled}
                                                type="password"
                                            />
                                            <InputWithValidation
                                                formik={formik2}
                                                label="Password"
                                                id="newPassword"
                                                name="newPassword"
                                                disabled={passwordDisabled}
                                                type="password"
                                            />
                                            <InputWithValidation
                                                formik={formik2}
                                                label="Confirm Password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                disabled={passwordDisabled}
                                                type="password"
                                            />
                                            <div className="mt-8 flex justify-end">
                                                <button onClick={(e) => { e.preventDefault(); formik2.handleSubmit(); }} type="submit"
                                                    className="rounded-lg p-2 text-black bg-textLight">Submit</button>
                                            </div>
                                        </form>
                                }
                            </div>
                        </CardTemplate>
                    </div>
                </div>
            </React.Fragment>
        )
    }