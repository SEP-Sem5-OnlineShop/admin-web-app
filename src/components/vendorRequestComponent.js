import React from 'react'

/**
 * This is the standard element for message popup
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */


export default function vendorRequestComponent({data}) {
    const comProps = {
        // image: props.image || "",
        name: {data}.name || "",
        region: {data}.telephone || "",
        date: {data}.shop || "",
    }
    return(



        <div>

<li className="border-gray-400 flex flex-row mb-2 pb-4 sm:pb-2 w-full">
                    <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                        <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                            <a href="/" className="block relative">
                            <img alt="profil" src={""} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                {/* <img alt="profil" src={comProps.image} className="mx-auto object-cover rounded-full h-10 w-10 "/> */}
                            </a>
                        </div>
                        <div className="flex-1 pl-1 md:mr-16">
                            <div className="font-medium dark:text-white">
                                {comProps.name}
                                {/* {data.name} */}
                            </div>
                            <div className="text-gray-600 dark:text-gray-200 text-sm">
                                {comProps.region}
                                {/* {data.telephone} */}
                            </div>
                        </div>
                        <div className="text-gray-600 dark:text-gray-200 text-xs w-12 sm:w-32 ">
                            {comProps.date}
                            {/* {data.shop} */}
                        </div>
                        <button className="w-12 sm:w-36 text-right flex justify-end">
                            <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                {/* <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                </path> */}
                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                
                                </path>
                            </svg>
                        </button>
                    </div>
                </li>

        </div>
        
    )
}













