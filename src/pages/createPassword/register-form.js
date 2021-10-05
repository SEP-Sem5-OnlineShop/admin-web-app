import React, {forwardRef, useState} from "react";
import InputWithValidation from "../../components/add-admin/input-with-validation/index";
import {useFormik} from "formik";
import * as Yup from "yup";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
// import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import {adminApi} from "../../api/index"

export default function CreatePassword() {
    
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .required('Required')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                ),
            confirmPassword: Yup.string()
                .required('Required').oneOf([Yup.ref('password'), null], 'Password not matched!'),
        }),
        onSubmit: async values => {
            if(await adminApi.createPassword()){
                console.log('succesfully created password')
            }else{
                console.log('error')
            }
            // await adminApi.register({
            //     password: values.password,
            //     password_confirmation: values.confirmPassword
            // })
        },
    });
    console.log("inside creqtePasswod")
    return (
        
        <form onSubmit={
            formik.handleSubmit
            } className="mt-8">
            <Card>
                <div color="lightBlue" size="sm">
                    <span className="text-xl font-medium">Create Password</span>
                </div>
                <CardBody>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                    <InputWithValidation
                                    label='Password'
                                    id='password'
                                    name='password'
                                    type='password'
                                    formik={formik}
                                />
                                <InputWithValidation
                                    label='Confirm Password'
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    type='confirmPassword'
                                    formik={formik}
                                />
                        
                    </div>
                </CardBody>
            </Card>
            {/*  */}
            {/* <div className="flex justify-center w-3/5"> */}
            <div className="flex justify-center mt-4 mr-4">
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
                
            </div>
            {/* </div> */}
        </form>
    );
};



// export default forwardRef(RegisterForm)