import React, { useContext } from 'react';
import Smurf from './Smurf';
import { SmurfContext } from '../contexts/SmurfContext';

const Smurfs = () => {
    const smurfs = useContext(SmurfContext);

    return (
        <div>
            {console.log(smurfs.smurfs)}
            {smurfs.smurfs.map((item, i) => ((
                <Smurf key = {item.i} item={item} />
            )))}
        </div>
    )
}

export default Smurfs;
