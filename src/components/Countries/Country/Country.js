import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
   const {name,population,area,region,flags}=props.country
    return (
        <div className='country'>
            <h1>{name.common}</h1>
            <img src={flags.png} alt="" />
            <h4>Population:{population}</h4>
            <p>Area:{area}</p>
            <p><small>Region:{region}</small></p>
            
            
        </div>
    );
};

export default Country;