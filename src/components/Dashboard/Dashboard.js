import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPieChart from '../MyPieChart/MyPieChart';

const Dashboard = () => {
    return (
        <div>
            <h1>MONTH WISE SELL</h1>
            <MyLineChart></MyLineChart>
            <MyPieChart></MyPieChart>
        </div>

    );
};

export default Dashboard;