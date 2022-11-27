import './App.css';
import React,{useState} from 'react';
import { products } from './products';
import Cart from './Cart';

function App() {
  const[list,setList]=useState(products)
  return (
    <div className="App">
      <Cart products={list} setList={setList}/>
    </div>
  );
}

export default App;
