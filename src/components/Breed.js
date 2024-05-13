// src/components/Breed.js
import React from 'react';

const Breed = ( props ) => {
  const { breed } = props;

  return (
    <div className="card h-100">
    <img src={breed?.image_url} className="card-img-top" alt={breed?.name} style={{ height: '200px', objectFit: 'cover' }} />
    <div className="card-body">
      <h5 className="card-title">{breed?.name}</h5>
    </div>
  </div>
  );
};

export default Breed;
