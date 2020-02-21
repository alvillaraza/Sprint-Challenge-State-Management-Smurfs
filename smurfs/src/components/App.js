import React, {useEffect, useState} from "react";
import "./App.css";
import { smurfContext } from '../contexts/SmurfContext';
import axios from 'axios';


const App = props => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => setData(res))
        .catch(err => console.log(err))
    
  }, [])

  //add function to add data
  
  return (
    <div className="App">
    {console.log(data)}
      <smurfContext value={{data}}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <div>
          {/* <GetSmurf smurf={state.smurfReducer} getSmurf={getSmurf} /> */}
        </div>
        </smurfContext>
      </div>
    );
  }


export default App;
