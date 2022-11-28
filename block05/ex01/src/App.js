import React,{useState,useEffect} from 'react';
import './App.css';
import {products} from './products';
import ItemDisplay from './ItemDisplay';

function App() {
const [category,setCategory]=useState('');
const [display,setDisplay]=useState('all');

  const handleSubmit=(e)=>{
    e.preventDefault();
    setDisplay(category);
  }
  const handleChange=(e)=>{
    e.preventDefault();
    setCategory(e.target.value)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange}></input>
        <button>Submit</button>
      </form>
      <ItemDisplay display={display} products={products} />
    </div>
  );
}

export default App;
