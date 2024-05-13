import React, { useState, useEffect } from 'react';
import Breed from './Breed';
import BreedForm from './BreedForm';
import { fetchAllBreeds, createBreed } from '../api';
import { toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';


const BreedList = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    try {
      const breedsList = await fetchAllBreeds();
      setBreeds(breedsList);
    } catch (error) {
      console.error('Error fetching breeds:', error);
    }
  };

  const handleCreateBreed = async (event) => {
    const name = event.target.name.value;
    event.preventDefault();
    if (!name.trim()) {
      return toast.error('Please enter a breed name.');
    }
    try {
      const newBreed = await createBreed(name);
      setBreeds([...breeds, newBreed]);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.exception) {
        const errorMessage = error.response.data.exception.message;
        toast.error(errorMessage);
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="container">
      <BreedForm handleSubmit={handleCreateBreed} />
      <h2>All Dog Breeds</h2>
      <div className="row">
        {breeds.map((breed, index) => (
          <div key={index} className="col-4 mb-4">
            <Breed breed={breed} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreedList;
