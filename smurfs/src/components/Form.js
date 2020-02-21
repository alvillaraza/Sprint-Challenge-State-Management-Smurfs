import React, { useState, useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

const Form = () => {
  const data = useContext(SmurfContext);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  const handleChanges = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    data.addSmurf([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={newSmurf.name}
            onChange={handleChanges}
          />
        </p>

        <p>
          <input
            type="text"
            placeholder="age"
            name="age"
            value={newSmurf.age}
            onChange={handleChanges}
          />
        </p>

        <p>
          <input
            type="text"
            placeholder="height"
            name="height"
            value={newSmurf.height}
            onChange={handleChanges}
          />
        </p>

        <button>AddSmurf</button>
      </form>
    </div>
  );
};

export default Form;
