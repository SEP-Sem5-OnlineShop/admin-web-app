import React from 'react';
import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';



export default function ChartBar(names) {
    // console.log((String(names.names[0].name)))
    // console.log(names.ratings[1])
    // const t=String(names.names[0].name)
    useEffect(() => {
        // <h1>{names.names[0]}</h1>
        let config = {
            type: 'bar',
            data: {
                labels: [
                    // t,
                    // names.names[1],
                    // names.names[2],
                    // names.names[3],
                    // names.names[4],
                    'Darshana',
                    'Darshana',
                    'Darshana',
                    'Darshana',
                    'Darshana',
                
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
                        data: [4.8,4.5,4.5,4.4,4.6,4],
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
