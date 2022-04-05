import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

const Persons = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, []);

    return (
        <div className='grid grid-cols-3 gap-4 gap-x-6 mt-8 p-4'>
            {
                persons.map(person => <Person person={person}></Person>)
            }
        </div>
    );
};

export default Persons;