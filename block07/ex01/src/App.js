import './App.css';
import Form from './Form';
import React,{useState} from 'react'

function App() {
  const [message,setMessage]=useState('Default');
  const [style,setStyle]=useState('transparent');
  return (
    <div className="App">
      <Form messageSetter={setMessage} styleSetter={setStyle} style={style} />
      <h2 className={style}>{message}</h2>
    </div>
  );
}

export default App;
