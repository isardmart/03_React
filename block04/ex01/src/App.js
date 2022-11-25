import './App.css';
import React, {useState} from 'react';
function App() {

  const [counter,setCounter]=useState(0);

  const count =()=>{
    setCounter(counter+1)
  }

  const isOdd=()=>{
    if((counter%2)!==0){return(counter)}
  }
  return (
    <div className="App">
      <h2>{isOdd()}</h2>
      <button className='button' onClick={count}></button>
    </div>
  );
}

export default App;
