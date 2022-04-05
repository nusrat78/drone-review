import React from 'react';

const Drone = (props) => {
    const { month, investment, sell, revenue } = props.drone;
    return (
        <div>
            <h1>{month}</h1>
            <h1>{investment}</h1>
            <h1>{sell}</h1>
            <h1>{revenue}</h1>
        </div>
    );
};

export default Drone;