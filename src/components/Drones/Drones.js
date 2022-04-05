import React, { useEffect, useState } from 'react';
import Drone from '../Drone/Drone';


const Drones = () => {
    const [drones, setDrones] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDrones(data))
    }, [])
    return (
        <div>
            <h1>hello</h1>
            {
                drones.map(drone => <Drone drone={drone}>

                </Drone>
                )}
        </div>
    );
};

export default Drones;