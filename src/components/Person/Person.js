import React from 'react';

const Person = (props) => {
    const { name, review } = props.person;
    return (
        <div className='bg-slate-400 h-52 w-80'>
            <h1>{name}</h1>
            <h1>{review}</h1>
        </div>
    );
};

export default Person; 