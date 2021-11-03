import React from 'react';
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import {genApi} from '../../api/index'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';


export default function ChartLine() {
    let day1 = new Date();
    let day2 = new Date(day1);
    let day3 = new Date(day1);
    let day4 = new Date(day1);
    let day5 = new Date(day1);
    day2.setDate(day2.getDate() - 1);
    day3.setDate(day3.getDate() - 2);
    day4.setDate(day4.getDate() - 3);
    day5.setDate(day5.getDate() - 4);
    console.log(day2.toDateString());
    console.log(day1.toDateString());



        const [purchaseCount1, setpurchaseCount1] = React.useState(0);
        const [purchaseCount2, setpurchaseCount2] = React.useState(0);
        const [purchaseCount3, setpurchaseCount3] = React.useState(1);
        const [purchaseCount4, setpurchaseCount4] = React.useState(0);
        const [purchaseCount5, setpurchaseCount5] = React.useState(0);
    
        const data1=[]
    
        React.useEffect(async () => {
        try{
    
            const count1=await genApi.getLastPurchaseDay1();
            const count2=await genApi.getLastPurchaseDay2();
            const count3=await genApi.getLastPurchaseDay3();
            const count4=await genApi.getLastPurchaseDay4();
            const count5=await genApi.getLastPurchaseDay5();
    
    
            setpurchaseCount1(count1.data.count)
            setpurchaseCount2(count2.data.count)
            setpurchaseCount3(count3.data.count)
            setpurchaseCount4(count4.data.count)
            setpurchaseCount5(count5.data.count)
    
        
            
    
        }catch(e){
            console.log(e)
            }
    
        }, []);
    
        
        
        data1.push(purchaseCount1);
        data1.push(purchaseCount2);
        data1.push(purchaseCount3);
        data1.push(purchaseCount4);
        data1.push(purchaseCount5);
        
        console.log(data1)



    const data = [
        ["day", "purchases"],
        [day1.toDateString(), data1[0]],
        [day2.toDateString(), data1[1]],
        [day3.toDateString(), data1[2]],
        [day4.toDateString(), data1[3]],
        [day5.toDateString(), data1[4]]
      ];
      const options = {
        title: "Number Of Purchases",
        curveType: "function",
        legend: { position: "bottom" }
      };
  
    return (
        <Card>
            <CardHeader color="orange" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h2 className="text-white text-2xl">Purchases of Last 5 days</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                <Chart
                    chartType="LineChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
                    />
                </div>
            </CardBody>
        </Card>



    //   <div className="App">
    //     <Chart
    //       chartType="LineChart"
    //       width="100%"
    //       height="400px"
    //       data={data}
    //       options={options}
    //     />
    //   </div>
    );
  
}

// export default ChartLine;