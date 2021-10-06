import React from 'react';
import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';



export default function ChartBar(params) {
    console.log(params)
    const comProps = {
        firstName:params.params[0]?params.params[0].name||"":"Pizza",
        firstRating:params.params[0]?params.params[0].rating||"":"3",
        secName:params.params[1]?params.params[1].name||"":"Burger",
        secRating:params.params[1]?params.params[1].rating||"":"4",
        thirdName:params.params[2]?params.params[2].name||"":"Bread",
        thirdRating:params.params[2]?params.params[2].rating||"":"4.5",
        fourthName:params.params[3]?params.params[3].name||"":"Pizza",
        fourthRating:params.params[3]?params.params[3].rating||"":"3.5",
        fifthName:params.params[4]?params.params[4].name||"":"Veggie burger",
        fifthRating:params.params[4]?params.params[4].rating||"":"4.8",
        
    }

    



    // console.log((String(names.names[0].name)))
    // console.log(params.data.names)
    // const t=String(names.names[0].name)
    useEffect(() => {
        // <h1>{names.names[0]}</h1>
        let config = {
            type: 'bar',
            data: {
                labels: [
                    // t,
                    comProps.firstName,
                    comProps.secName,
                    comProps.thirdName,
                    comProps.fourthName,
                    comProps.fifthName,
                
                ],
                datasets: [
                    // {
                    //     label: new Date().getFullYear(),
                    //     backgroundColor: '#03a9f4',
                    //     borderColor: '#03a9f4',
                    //     data: [30, 78, 56, 34, 100, 45, 13],
                    //     fill: false,
                    //     barThickness: 8,
                    // },
                    {
                        label: 'ratings',
                        fill: false,
                        backgroundColor: '#f44336',
                        borderColor: '#f44336',
                        data: [comProps.firstRating,
                            comProps.secRating,
                            comProps.thirdRating,
                            comProps.fourthRating,
                            comProps.fifthRating,
                            0],
                        barThickness: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Orders Chart',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                legend: {
                    labels: {
                        fontColor: 'rgba(17,17,17,.7)',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month',
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.3)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                            },
                            gridLines: {
                                borderDash: [2],
                                drawBorder: false,
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.2)',
                                zeroLineColor: 'rgba(33, 37, 41, 0.15)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx = document.getElementById('bar-chart').getContext('2d');
        window.myBar = new Chart(ctx, config);
    }, []);
    return (
        <Card>
            <CardHeader color="pink" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h2 className="text-white text-2xl">Sales value</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <canvas id="bar-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}




















// export default function  ChartBar(names, ratings) {
//     console.log(names.names[0])
//     console.log(names.ratings[1])
    

  
//     useEffect(() => {
//         let config = {
//             type: 'bar',
//             data: {
//                 labels: [
//                     names.names[0],
//                     // names.nsme[1],
//                     // data[0].name,
//                     // data[1].name,
//                     // data[2].name,
//                     // data[3].name,
//                     // data[4].name,
//                     // 'June',
//                     // 'July',
//                 ],
//                 datasets: [
//                     // {
//                     //     // label: new Date().getFullYear(),
//                     //     backgroundColor: '#03a9f4',
//                     //     borderColor: '#03a9f4',
//                     //     data: [30, 78, 56, 34, 100, 45, 13],
//                     //     fill: false,
//                     //     barThickness: 8,
//                     // },
//                     {
//                         // label: new Date().getFullYear() - 1,
//                         fill: false,
//                         backgroundColor: '#f44336',
//                         borderColor: '#f44336',
//                         data: [27, 68, 86, 74, 10, 4, 87],
//                         barThickness: 8,
//                     },
//                 ],
//             },
//             options: {
//                 maintainAspectRatio: false,
//                 responsive: true,
//                 title: {
//                     display: false,
//                     text: 'Orders Chart',
//                 },
//                 tooltips: {
//                     mode: 'index',
//                     intersect: false,
//                 },
//                 hover: {
//                     mode: 'nearest',
//                     intersect: true,
//                 },
//                 legend: {
//                     labels: {
//                         fontColor: 'rgba(17,17,17,.7)',
//                     },
//                     align: 'end',
//                     position: 'bottom',
//                 },
//                 scales: {
//                     xAxes: [
//                         {
//                             display: false,
//                             scaleLabel: {
//                                 display: true,
//                                 labelString: 'Month',
//                             },
//                             gridLines: {
//                                 borderDash: [2],
//                                 borderDashOffset: [2],
//                                 color: 'rgba(33, 37, 41, 0.3)',
//                                 zeroLineColor: 'rgba(33, 37, 41, 0.3)',
//                                 zeroLineBorderDash: [2],
//                                 zeroLineBorderDashOffset: [2],
//                             },
//                         },
//                     ],
//                     yAxes: [
//                         {
//                             display: true,
//                             scaleLabel: {
//                                 display: false,
//                                 labelString: 'Value',
//                             },
//                             gridLines: {
//                                 borderDash: [2],
//                                 drawBorder: false,
//                                 borderDashOffset: [2],
//                                 color: 'rgba(33, 37, 41, 0.2)',
//                                 zeroLineColor: 'rgba(33, 37, 41, 0.15)',
//                                 zeroLineBorderDash: [2],
//                                 zeroLineBorderDashOffset: [2],
//                             },
//                         },
//                     ],
//                 },
//             },
//         };
//         let ctx = document.getElementById('bar-chart').getContext('2d');
//         window.myBar = new Chart(ctx, config);
//     }, []);
//     return (
//         <Card>
//             <CardHeader color="pink" contentPosition="left">
//                 <h6 className="uppercase text-gray-200 text-xs font-medium">
//                     Overview
//                 </h6>
//                 <h2 className="text-white text-2xl">ytuie</h2>
//             </CardHeader>
//             <CardBody>
//                 <div className="relative h-96">
//                     <canvas id="bar-chart"></canvas>
//                 </div>
//             </CardBody>
//         </Card>
//     );
// }
