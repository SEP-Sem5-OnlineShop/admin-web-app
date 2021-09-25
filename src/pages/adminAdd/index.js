import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";

import InputWithValidation from "../../components/add-admin/input-with-validation/index";
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import {genApi} from '../../api/index'
import {useParams} from "react-router"
import { string } from "yup/lib/locale";
import { waitFor } from "@testing-library/dom";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


export default function RegisterVendor() {
    /////////////////////////
    const [showSuccessfulModal, setshowSuccessfulModal] = React.useState(false);
    const [showFailedlModal, setshowFailedlModal] = React.useState(false);
        
    const [files, setFiles] = React.useState([]);
        
    
    const formik = useFormik({
        initialValues: {
            firstName: '',
            telephone: '',
            email:'',
            lastName: '',
            password: 'User@123',
            

        },


            
        
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('Required'),
            telephone: Yup.string()
                .required('Required')
                .matches('^(?:0|94|\\+94|0094)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|91)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\\d)\\d{6}$',
                    'Telephone number did not matched with requirements!'),
            lastName: Yup.string()
                .required('Required'),
            email: Yup.string()
                .required('Required'),

            password: Yup.string()
                .required('Required')
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                ),
            
        }),
        onSubmit: async values => {
            console.log(values.firstName)
            if (await genApi.createAdmin({
                firstName: values.firstName,
                telephone: values.telephone,
                email: values.email,
                lastName: values.lastName,
                password: values.password,  
            }))
            {setshowSuccessfulModal(true)}
            else{
                {setshowFailedlModal(true)}
                console.log("Bad Request")
            }
            
        },
    });

   

    
    return (
        <div className="p-6">
            <div className="mb-8">
                <span className="text-2xl font-medium">Register a New Admin</span>
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
                                label="email"
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
                    Successfully added as an admin..............
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


                
    )
}