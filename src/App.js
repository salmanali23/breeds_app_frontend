import React from 'react';
import BreedList from './components/BreedList';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="App">
      <ToastContainer />
      <BreedList/>
    </div>
  );
}

export default App;
