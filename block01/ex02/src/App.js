//import logo from './logo.svg';
import React from 'react';
//import { hydrateRoot } from 'react-dom/client';
import './App.css';
import products from './components/products';
import footer from './components/footer';
import header from './components/header';
import productUI from './components/productUI'

function App() {

  let productDisplay = (arr) =>
    arr.map((value) => {
      return <p>{productUI(value)}</p>
    });

  let productBest = (arr) =>
    arr.map((value) => {
      return value.bestSeller? <p>{productUI(value)}</p> :null;
    });
  
  return (
    <div className="App">
    {header()}
    <div>
    <h1>Our Products</h1>
    <ul className='products'>{productDisplay(products)}</ul>
    <h1>Bestsellers</h1>
    <ul className='products'>{productBest(products)}</ul>
   </div>
    {footer()}
    </div>
  );
}

export default App;
