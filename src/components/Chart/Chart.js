import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Chart = (props) => {
    const { sell, month } = props.chart;
    return (
        <LineChart width={400} height={500}>
            <Line dataKey={sell}></Line>
            <XAxis dataKey={month}></XAxis>
            <YAxis></YAxis>
        </LineChart>

    );
};

export default Chart;