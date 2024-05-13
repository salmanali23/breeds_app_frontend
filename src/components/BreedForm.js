import React, { useState } from 'react';

const BreedForm = (props) => {
  const [name, setName] = useState('');
  const { handleSubmit } = props;

  return (
    <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 text-center">
          <h1>Create Breed</h1>
        </div>
        <div className="col-sm-12 col-md-12 text-center">
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="exampleInputName2">Breed</label>
              <input type="text" className="form-control" id="name" placeholder="Breed Name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success mb-2">Create</button>
          </form>
        </div>
      </div>
  );
};

export default BreedForm;
