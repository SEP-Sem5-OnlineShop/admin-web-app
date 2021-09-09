import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Button from "@material-tailwind/react/Button";
import Progress from '@material-tailwind/react/Progress';
import Team1 from 'assets/img/team-1-800x800.jpg';
import Team2 from 'assets/img/team-2-800x800.jpg';
import Team3 from 'assets/img/team-3-800x800.jpg';
import Team4 from 'assets/img/team-4-470x470.png';

export default function ListComponent(props) {
    const comProps = {
        // title: props.title || '',
        name: props.name || '',
        // vendor: props.vendor || '',
        image: props.image || '',
        rating:props.rating || '',
        permit: props.permit || '',
        
    }

    return (
        
        <Card>
            {/* <CardHeader color="purple" contentPosition="left">
            <h2 className="text-white text-2xl">Vendor List</h2>
            </CardHeader> */}
            <CardBody>
                <div className="overflow-x-auto">
                    
                        <table className="items-center w-full bg-transparent border-collapse"> 
                        <tbody>
                            <tr>
                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-10 h-10 rounded-full border-2 border-white">
                                            <Image
                                                src={comProps.image}
                                                rounded
                                                alt="..."
                                            />
                                            
                                        </div>
                                        
                                        
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {comProps.name}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {comProps.rating}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                    {comProps.permit}
                                </th>
                                
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <Button
                                            color="lightBlue"
                                            buttonType="filled"
                                            size="sm"
                                            rounded={false}
                                            block={false}
                                            iconOnly={false}
                                            ripple="light"
                                        >
                                        <svg width="12" fill="Black" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            {/* <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                            </path> */}
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                                
                                            </path>
                                        </svg>
                                    </Button>
                                </th>
                            </tr>
                            
                            
                        </tbody>
                </table>
                </div>
            </CardBody>
        </Card>
    );
}
