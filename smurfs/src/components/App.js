import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';
import axios from "axios";
import Smurfs from './Smurfs';
import Form from './Form';


function App() {
  const [smurfs, setSmurf] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => setSmurf(res.data))
      .catch(err => console.log(err));
  }, []);

  //add function to add data
 
  
 
  

  return (
    <div className="App">
      {/* {console.log(data)} */}
      <SmurfContext.Provider value={{ smurfs, setSmurf }}>
        {/* {console.log('smurf', smurf)} */}
        

        <h1>SMURFS Village</h1>
        <Smurfs />
        <Form />
       


      

     
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
