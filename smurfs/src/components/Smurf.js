import React from 'react';

const Smurf = props => {
    return (
        <div>
            <h1>{props.item.name}</h1>
            <p>{props.item.age}</p>
            <p>{props.item.height}</p>
        </div>
    )
}

export default Smurf;