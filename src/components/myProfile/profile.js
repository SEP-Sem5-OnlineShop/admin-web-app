import React from 'react'

import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';





export default function ProfileCard(params) {
    // const {id} = useParams()
    const [disabled, setDisabled] = React.useState(true)
    const comProps = {
        // title: props.title || '',
        // Image: team,
        name: params.data.firstName +' '+params.data.lastName || '',
        telephone: params.data.telephone || '',
        email: params.data.email || '',
        role: params.data.role || '',

        
    }
    

    
    return (
        <Card className=''>
        <div color="lightBlue" size="sm">
            <span className="text-3xl font-medium flex justify-center"><u>Admin Profile</u></span>
        </div>
        <CardBody>

            <ul className='list-decimal'>
            <div className="grid grid-cols-1 gap-y-3 gap-x-3 px-24 w-3/5">
            <li><label
                    className='font-medium text-secondary text-sm xs:text-lg md:text-lg'
                    for='name'
                   >
                        Name
                    </label></li>
                    
            <input readOnly
                    id={comProps.name}
                    name={comProps.name}
                    value={comProps.name}
                    
                    className={
                        `rounded-md
                        mt-1 p-2
                        h-10 w-full
                        focus:outline-none
                        focus:shadow-md
                        bg-accent
                        `
                    }
                />
                
                
                
            </div>

            <br></br>


            <div className="grid grid-cols-1 gap-y-3 gap-x-3 px-24 w-3/5">
            <li><label
                    className='font-medium text-secondary text-sm xs:text-lg md:text-lg'
                    for='telephone'>
                        Telephone Number
                    </label></li>
            <input readOnly
                    id={comProps.telephone}
                    name={comProps.telephone}
                    value={comProps.telephone}
                    
                    className={
                        `rounded-md
                        mt-1 p-2
                        h-10 w-full
                        focus:outline-none
                        focus:shadow-md
                        bg-accent
                        `
                    }
                />
                
                
                
            </div>

            <br></br>

            <div className="grid grid-cols-1 gap-y-3 gap-x-3 px-24 w-3/5">
            <li><label
                    className='font-medium text-secondary text-sm xs:text-lg md:text-lg'>
                        Email
                    </label></li>
            <input readOnly
                    id={comProps.email}
                    name={comProps.email}
                    disabled={disabled}
                    value={comProps.email}
                    className={
                        `rounded-md
                        mt-1 p-2
                        h-10 w-full
                        focus:outline-none
                        focus:shadow-md
                        bg-accent
                        `
                    }
                />
                
                
                
            </div>

            <br></br>

            <div className="grid grid-cols-1 gap-y-3 gap-x-3 px-24 w-3/5">
            <li><label
                    className='font-medium text-secondary text-sm xs:text-lg md:text-lg'>
                        Role
                    </label></li>
            <input readOnly
                    id={comProps.role}
                    name={comProps.role}
                    value={comProps.role}
                    className={
                        `rounded-md
                        mt-1 p-2
                        h-10 w-full
                        focus:outline-none
                        focus:shadow-md
                        bg-accent
                        `
                    }
                />
                
                
                
            </div>
            </ul>
        </CardBody>
    </Card>








        // <Card>
        //     <div className="flex flex-wrap justify-center">
                
        //         <div className="p-4 text-center">
        //                 <span className="text-4xl font-medium text-gray-700"><u>Admin Profile</u></span>
        //             </div>
        //         <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">

                
                    
        //             <div className="p-4 text-center">
        //                 <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
        //                 {comProps.c}
        //                 </span>
        //                 <span className="text-sm text-gray-700">Telephone</span>
        //             </div>
                    
        //         </div>
        //     </div>
        //     <div className="text-center">
        //         <H5 color="gray">{comProps.name}</H5>
                
                
        //     </div>

        //     <div className="p-4 text-center">
        //                 <span className="text-l font-medium block lowercase tracking-wide text-gray-900">
        //                 {comProps.email}
        //                 </span>
                        
        //             </div>
        //     <CardBody>
        //         <div className="border-t border-lightBlue-200 text-center px-2 ">
                    
        //         </div>
        //     </CardBody>
        //     <CardFooter>

               
        //     </CardFooter>

                    
        // </Card>
    );
}
