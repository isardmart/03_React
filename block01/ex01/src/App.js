import React from 'react';
import './App.css';

function App() {

  let categories=['t-shirts', 'hats', 'shorts', 'jackets', 'pants', 'shoes'];
  let categoriesDescription=['lorem ipsum','ipsum lorem','muspi merol', 'merol muspi','lorem muspi','morel ipsum'];

let renderCategories = (arr) => (
    arr.map( (ele, idx)=>{
    return <div>
      <h2 key={idx}>Category {idx+1}:</h2>
      <h3> {ele[0].toUpperCase()+ele.slice(1)}</h3>
      <p> {categoriesDescription[idx][0].toUpperCase()+categoriesDescription[idx].slice(1)}</p>
    </div> ;
  } )
)

  return (
    <div className="App">
    <header>
      <h1>Header is here</h1>
    </header>

    <h1>Displaying categories here:</h1>
    {
      renderCategories(categories)
    }


    <footer>
      <h1>Footer is here</h1>
    </footer>
    </div>
    );
}

export default App;