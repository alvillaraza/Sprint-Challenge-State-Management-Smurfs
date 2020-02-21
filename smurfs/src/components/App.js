import React, { useEffect, useState, createContext } from "react";
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';
import axios from "axios";


function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  //add function to add data
  const addSmurf = smurf => {
    setData([...data, smurf]);
  }
  
  const handleChanges = e => {
    setData(e.target.value);
  };

  

  return (
    <div className="App">
      {console.log(data)}
      <SmurfContext.Provider value={{ data, addSmurf }}>

        <p><input type='text' placeholder='name' name='newSmurf' value={setData} onChange={handleChanges} /></p>

        <p><input type='text' placeholder='age' name='age' value={setData} onChange={handleChanges} /></p>

        <p><input type='text' placeholder='height' name='height' value={setData} onChange={handleChanges} /></p>

        <button onClick={() => addSmurf(data)}>AddSmurf</button>


        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <h1></h1>

     
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
