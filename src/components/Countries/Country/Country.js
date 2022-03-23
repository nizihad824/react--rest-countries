import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>Country Name :{props.name}</h2>
            <h4>Population :{props.population}</h4>
            <h4>Area :{props.area}</h4>
            
        </div>
    );
};

export default Country;