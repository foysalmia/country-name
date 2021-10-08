import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css";

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/all?fbclid=IwAR0exVYc7OOqU0vYg7tvZ9txqCgaTwxViKNqpTOhYsnqapOCJHANsNxEPDc`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div className="container">
            <h1>Total countries loaded {countries.length}</h1>
            <div className='card'>
                {countries.map(country =><Country country={country} key={country.name.common}></Country>)}
            </div>
        </div>
    );
};

export default Countries;