import React from 'react';
import Chart from "react-google-charts";
import {genApi} from '../../api/index'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';


export default function BarChart() {
    let day1 = new Date();
    let day2 = new Date(day1);
    let day3 = new Date(day1);
    let day4 = new Date(day1);
    let day5 = new Date(day1);
    day2.setDate(day2.getDate() - 1);
    day3.setDate(day3.getDate() - 1);
    day4.setDate(day4.getDate() - 1);
    day5.setDate(day5.getDate() - 1);
    



    const [vendors, setVendors] = React.useState( [] );

        React.useEffect(async () => {
        try{
            const result = await genApi.getMaxProducts();

            setVendors(result.data.data);
            // console.log(result.data)
            // console.log(result.data.product_name)
        }catch(e){
            console.log(e)
        }
        
        },[]);
        

        const names=[]
        vendors.map( vendor =>  names.push({
        name: vendor.product_name,
        // rating: vendor.rating,
        }))

        

        const ratings=[]
        vendors.map( vendor =>  ratings.push({
        name: vendor.product_name,
        rating: vendor.rating,
        }))
        // params.params[0]?params.params[0].name||"":"Pizza",
        // console.log(ratings)
        const rating1=ratings[0]?ratings[0].rating||"":"0";
        const name1=ratings[0]?ratings[0].name||"":" ";

        const rating2=ratings[1]?ratings[1].rating||"":"0";
        const name2=ratings[1]?ratings[1].name||"":" ";

        const rating3=ratings[2]?ratings[2].rating||"":"0";
        const name3=ratings[2]?ratings[2].name||"":" ";

        const rating4=ratings[3]?ratings[3].rating||"":"0";
        const name4=ratings[3]?ratings[3].name||"":" ";

        const rating5=ratings[4]?ratings[4].rating||"":"0";
        const name5=ratings[4]?ratings[4].name||"":" ";
        // console.log(Math.round(rating1 * 100) / 100)
        



    const data = [
        ["Product", "ratings"],
        // [name1,(Math.round(ratings[0].rating * 100) / 100)],
        [name1,rating1],
        [name2,rating2],
        [name3,rating3],
        [name4,rating4],
        [name5,rating5],
        
      ];
    //   const options = {
    //     title: "Ratings",
    //     curveType: "function",
    //     legend: { position: "bottom" }
    //   };
  
    return (
        <Card>
            <CardHeader color="orange" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    {/* Overview */}
                </h6>
                <h2 className="text-white text-2xl">Products with maximum ratings</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                <Chart
                    chartType="BarChart"
                    width="100%"
                    height="400px"
                    data={data}
                    
                    />
                </div>
            </CardBody>
        </Card>



    
    );
  
}

