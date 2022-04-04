import React from 'react';

const Home = () => {
    return (
        <div className='display: flex items-center '>
            <div>
                <h1 className='text-3xl'>YOUR BEST DRONE</h1>
                <h1 className='text-3xl'>THE DRONE YOU DESIRE</h1>
                <p>The best drones have brought responsive flying experiences to the masses, and their camera and streaming capabilities have made it cheaper and easier for filmmakers to take to the skies for a smooth, 4K aerial shot. We dive into the entry-level and enthusiast options from popular drone makers, like DJI, to see what each new drone brings to the market.</p>
            </div>
            <img src="drone.png" alt="" />
        </div>
    );
};

export default Home;