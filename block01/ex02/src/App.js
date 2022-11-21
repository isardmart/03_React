//import logo from './logo.svg';
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './App.css';
import logo from './logo-1715078716';
import products from './products';

function App() {
  let cartNumber=0;
  let socialnTermsArray=['Friend Us On Facebook','Testimonials','About','Terms of Service','Refund Policy'];
  let searchBar=function(){
    return <div><input type="text" ></input></div>
  };
  let socialnTerms=(arr)=>(
    arr.map((ele,idx)=>{
      return <p key={idx}>{ele}</p>
    } )
  );
  let productDisplay=(arr)=>{
    arr.map(value=>{
      return <p>{value.product}</p>
    })
    return <p>{arr[0].product}</p>
  };
  let productBest=(arr)=>{
    arr.map((ele,idx)=>{
      return <p key={idx}>{ele}</p>
    } )
  };
  
  return (
    <div>
    <header>
      <img src={logo} alt="logo"></img>
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Custom</li>
        <li>Corporate</li>
        <li>Contact</li>
      </ul>
      <p>Cart ({cartNumber})</p>
    </header>
    <div>
    <h1>Our Products</h1>
    <p>{productDisplay(products)}</p>
    <h1>Bestsellers</h1>
    {productBest(products)}
   </div>
    <footer>
      <ul>
        <li>Chalk us out!<ul>{socialnTerms(socialnTermsArray)}</ul></li>
        <li>What even more</li>
        <li>Search{searchBar()}</li>
      </ul>
    </footer>
    {/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  */}
    </div>
  );
}

export default App;
