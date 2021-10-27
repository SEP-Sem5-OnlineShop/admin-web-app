import React from 'react';
import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import {genApi} from '../api/index'

export default function ChartLine() {
    const [purchaseCount1, setpurchaseCount1] = React.useState(3);
    const [purchaseCount2, setpurchaseCount2] = React.useState(3);
    const [purchaseCount3, setpurchaseCount3] = React.useState(0);
    const [purchaseCount4, setpurchaseCount4] = React.useState(2);
    const [purchaseCount5, setpurchaseCount5] = React.useState(1);

    const data1=[]

    React.useEffect(async () => {
        try{
            const count1=await genApi.getLastPurchaseDay1();
            setpurchaseCount1(count1.data.count || 0)
            console.log(count1.data.count)
            // count1.then(
            //     function(value) { 
            //         setpurchaseCount1(value.data.count)
            //         console.log((value.data.count))
            //     },
            //     function(error) { 
            //         console.log(error) }
            // )
            
        
        }catch(e){
        console.log(e)
        }
        
    },0);
    console.log(purchaseCount1)




    // const count1=genApi.getLastPurchaseDay1();
    const count2=genApi.getLastPurchaseDay2();
    const count3=genApi.getLastPurchaseDay3();
    const count4=genApi.getLastPurchaseDay4();
    const count5=genApi.getLastPurchaseDay5();

    

    // count1.then(
    //     function(value) { 
    //         setpurchaseCount1(value.data.count)
    //     },
    //     function(error) { 
    //         console.log(error) }
    // )
    
    
    count2.then(
        function(value) { 
            setpurchaseCount2(value.data.count)
        },
        function(error) { 
            console.log(error) }
    )

    
    count3.then(
        function(value) { 
            setpurchaseCount3(value.data.count)
        },
        function(error) { 
            console.log(error) }
    )

    
    count4.then(
        function(value) { 
            setpurchaseCount4(value.data.count)
        },
        function(error) { 
            console.log(error) }
    )

    
    count5.then(
        function(value) { 
            setpurchaseCount5(value.data.count)
        },
        function(error) { 
            console.log(error) }
    )

    
    // data1.push(purchaseCount1);
    data1.push(purchaseCount2);
    data1.push(purchaseCount3);
    data1.push(purchaseCount4);
    data1.push(purchaseCount5);
    console.log(data1)

    useEffect(async () => {
        try{
            const count1= await genApi.getLastPurchaseDay1();
            setpurchaseCount1(count1.data.count || 0)
            console.log(count1.data.count)
            // count1.then(
            //     function(value) { 
            //         setpurchaseCount1(value.data.count)
            //         console.log((value.data.count))
            //     },
            //     function(error) { 
            //         console.log(error) }
            // )
            
        
        }catch(e){
        console.log(e)
        }
        console.log(purchaseCount1)
        data1.push(purchaseCount1);

        var config = {
            type: 'line',
            data: {
                labels: [
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                    '',
                ],
                datasets: [
                    
                    // {
                    //     label: new Date().getFullYear(),
                    //     backgroundColor: '#03a9f4',
                    //     borderColor: '#03a9f4',
                    //     data: [65, 78, 66, 44, 56, 67, 75],
                    //     fill: false,
                    // },
                    {
                        
                        // label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: '#ff9800',
                        borderColor: '#ff9800',
                        data: data1,
                        
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Sales Charts',
                    fontColor: 'white',
                },
                legend: {
                    labels: {
                        fontColor: 'black',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(17,17,17,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Month',
                                fontColor: 'white',
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(0, 0, 0, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(17,17,17,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                                fontColor: 'white',
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: 'rgba(17, 17, 17, 0.15)',
                                zeroLineColor: 'rgba(33, 37, 41, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        // var ctx = document.getElementById('line-chart').getContext('2d');
        // window.myLine = new Chart(ctx, config);
    }, []);

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
                    <canvas id="line-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}
