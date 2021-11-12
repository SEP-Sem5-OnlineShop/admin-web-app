import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import InputWithValidation from "../../components/add-admin/input-with-validation/index";
import { registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import {genApi} from '../../api/index'
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


export default function RegisterVendor() {


  
    const history = useHistory();
    const [loading, setLoading] = React.useState(false)
        
   
        //formik are set to take inputs
    
    const formik = useFormik({
        initialValues: {
            firstName: '',
            telephone: '',
            email:'',
            lastName: '',
            

        },


            
        
        //checking the validation

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

           
            
        }),

        //if the submission done successfully toast will appear and if success page will redirect to dashboard

        onSubmit: async values => {
          setLoading(true)
            try{
              if (await genApi.createAdmin({
                firstName: values.firstName,
                telephone: values.telephone,
                email: values.email,
                lastName: values.lastName,
        
            }))
            toast.success("Successfully added as an admin........")
            history.push(`/`)
          }catch(e){
              toast.error("Bad Request")
                console.log("Bad Request")
            }
            
        },
    });

   

    //return


    return (
        <div className="p-6">
            <div className="mb-8">
                <span className="text-2xl font-medium">Register a New Admin</span>
            </div>

        {/* form  */}

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
                            
                            
                        </div>
                    </CardBody>
                </Card>
                <div className="flex justify-center mt-4 mr-4">
                    
                {/* button is disable initially. after inputs are filled button will be enabled */}

                    <button
                disabled={
                    (formik.errors.firstName || formik.errors.lastName || formik.errors.telephone || formik.errors.email) ||
                    (!formik.values.firstName || !formik.values.lastName||!formik.values.telephone || !formik.values.email)
                }
                data-testid="login-form-submit" type="submit" className="w-48 py-3 mt-2 rounded-xl bg-primary text-black font-bold">
                {loading ? 'Loading...' : 'Submit'}
            </button>
                    
                    </div>
                    
               
            </form>



        </div>


                
    )
}