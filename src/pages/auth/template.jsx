import React from "react"
import logo from '../../assets/svg/logo/logo-new.svg'

export default function AuthTemplate(props) {
    // const history = useHistory()
    // const location = useLocation()
    return (
        <div className="w-1/2 min-h-screen overflow-x-hidden flex">

            

            <div className="w-full overflow-x-hidden xl:w-5/12 min-h-screen
                            bg-white
                            relative">
                
<div>
                    
                    <div className="
                    flex flex-col align-center
                    w-full min-h-100 md:min-h-0">
                    {/* <div> */}
                        <div className="flex justify-center text-3xl md:text-6xl font-bold text-secondary mt-4">{props.upperText1}
                        </div>
                        <div className="flex justify-center text-xl font-medium text-secondary mt-2">{props.upperText2}
                        </div>
                    </div>

                    <div className="
                    w-full md:w-1/2 h-auto min-h-4/5
                    py-8 sm:p-4 mt-8 md:mb-8
                    flex flex-col items-center justify-center
                    bg-white border-2
                    rounded-tl-3.5xl md:rounded-2xl md:min-h-0
                    relative">

                        
                        {
                            props.withImage ?
                                <div className="w-3/4 mb-10 max-w-280">
                                    <img src={logo} alt="logo"/>
                                </div> :
                                null
                        }

                        <div className="flex justify-center items-center w-full relative">
                            {props.children}
                        </div>

                        

                        <div className="mt-4 relative z-index-10">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}