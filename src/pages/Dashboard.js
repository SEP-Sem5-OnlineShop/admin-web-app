import React from 'react';
import StatusCard from 'components/statusCard/Status';
// import ChartLine from 'components/ChartLine.js';
import ChartLine from '../components/chart/ChartLine.js'
import ChartBar from 'components/BarChart/chartPage';
import BarChart from 'components/BarChart/BarChart';
import DashboardCard from 'components/dashboard/profile'
import { useSelector } from "react-redux"

export default function Dashboard() {
    const isLoggedIn = useSelector(state => state.user.isLogin);
    return (
        


        <div className="p-4">
           
            <h2 className="text-4xl font-extrabold text-center py-4">Welcome To The OnTheWay Admin Panel</h2>
            <br></br>
            {isLoggedIn !='no' ? (
            <DashboardCard/>):("")}
                    {isLoggedIn !='no' ? (    <StatusCard />):(
                        <h2 className="text-3xl text-red-500 font-extrabold text-center py-4">You Should Log as an admin to use admin Pannel</h2>
                    )}
                        
                        
            <div className=" px-3 md:px-8 h-40" />
            <div className="px-3 md:px-8 -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            {/* <ChartLine data={data1}/> */}
                            {isLoggedIn !='no' ? (<ChartLine/> ):("")}
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                        {isLoggedIn !='no' ? (<BarChart/> ):("")}
                            {/* <BarChart /> */}
                        </div>
                        <div>
                        {/* <ChartBar /> */}
                        </div>

                        
                    </div>
                </div>
            </div>

        </div>
    );
}
