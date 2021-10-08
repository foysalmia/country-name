import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flags,capital,region,population} = props.country;
    return (
        <div className='country'>
            <h1>{name.common}</h1>
            <img src={flags.png} alt="" />
            <h4>Capital: {capital}</h4>
            <h4>Region: {region}</h4>
            <h5>Population: {population}</h5>
            
        </div>
    );
};

export default Country;