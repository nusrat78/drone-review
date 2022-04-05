import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';

const Dashboard = () => {
    return (
        <div className='mt-7'>
            <h1>MONTH WISE SELL</h1>
            <div className='ml-96'>
                <MyLineChart></MyLineChart>
            </div>
            <h1 className='mt-7'>INVESTMENT VS REVENUE</h1>
            <div className='ml-96'>
                <MyPieChart></MyPieChart>
            </div>

        </div>

    );
};

export default Dashboard;