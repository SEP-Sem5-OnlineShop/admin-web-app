import React from 'react';
import StatusCard from 'components/statusCard/Status';
import ChartLine from 'components/ChartLine.js';
// import ChartLine from '../components/chart/ChartLine.js'
import ChartBar from 'components/BarChart/chartPage';
import DashboardCard from 'components/dashboard/profile'
import {genApi} from '../api/index'

export default function Dashboard() {
    //////////////////////////////////
    
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
    //////////////////////////////
    return (
        <div className="p-4">
            <h2 className="text-4xl font-extrabold text-center py-4">Welcome To The OnTheWay Admin Panel</h2>
            <br></br>
            <DashboardCard/>
                        <StatusCard />
                        

            <div className=" px-3 md:px-8 h-40" />
            <div className="px-3 md:px-8 -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <ChartLine data={data1}/>
                            {/* <ChartLine/> */}
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <ChartBar />
                        </div>
                        <div>
                        {/* <ChartLine /> */}
                        </div>

                        
                    </div>
                </div>
            </div>

        </div>
    );
}
