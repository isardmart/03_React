import './App.css';
import React, {useState} from 'react'
import Input from './Input';
import Value from './Value';

function App() {
  const [eur,setEur]=useState(0)
  return (
    <div className="App">
      <Input eur={eur} setEur={setEur}/>
      <Value eur={eur}/>
    </div>
  );
}

export default App;
