import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import team from '../assets/img/team-1-800x800.jpg';
// import Image from '@material-tailwind/react/Image';
// import Progress from '@material-tailwind/react/Progress';
// import Team1 from 'assets/img/team-1-800x800.jpg';
// import Team2 from 'assets/img/team-2-800x800.jpg';
// import Team3 from 'assets/img/team-3-800x800.jpg';
// import Team4 from 'assets/img/team-4-470x470.png';
import TableCard from 'components/ListElementComponent';

export default function ListComponent(props) {
    // const comProps = {
    //     title: props.title || '',
    //     name: props.name || '',
    //     vendor: props.vendor || '',
    //     image: props.image || '',
    //     rating:props.rating || '',
    //     permit: props.permit || '',
        
    // }

    return (
        
        <Card>
            <CardHeader color="purple" contentPosition="left">
            <h2 className="text-white text-2xl">Vendor List</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse"> 
                        <thead>
                            <tr>
                            <th className="px-6 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Photo
                                </th>
                                <th className="px-6 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Name
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Rating
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Permit Number
                                </th>
                                
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    More Details
                                </th>
                            </tr>
                        </thead>
                        </table>
                        <TableCard image={team} name='JOHN' rating='5.5' permit='1234' />
                        <TableCard image={team} name='JOHN' rating='5.5' permit='1234' />
                        <TableCard image={team} name='JOHN' rating='5.5' permit='1234' />
                        <TableCard image={team} name='JOHN' rating='5.5' permit='1234' />
                        
                </div>
            </CardBody>
        </Card>
    );
}
