import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';

const Charts = () => {
    const [charts, setCharts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCharts(data))
    }, [])
    return (
        <div>
            <h1>hello</h1>
            {
                charts.map(chart => <Chart chart={chart}></Chart>)
            }
        </div>
    );
};

export default Charts;