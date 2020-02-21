import React, {useState} from 'react';

const Form = () => {
    const [newSmurf, setNewSmurf] = useState();

    const handleChanges = e => {
        setNewSmurf(e.target.value);

      };
    
      const handleSubmit = smurf => {
        setNewSmurf(smurf);
    };
    

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <p><input type='text' placeholder='name' name='newSmurf' value={setNewSmurf} onChange={handleChanges} /></p>

        <p><input type='text' placeholder='age' name='age' value={setNewSmurf} onChange={handleChanges} /></p>

        <p><input type='text' placeholder='height' name='height' value={setNewSmurf} onChange={handleChanges} /></p>

          <button>AddSmurf</button>
          </form>
        </div>
    )
}

export default Form;