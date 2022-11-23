import './App.css';
import React,{useState} from 'react';

function App(){
  let [title,setTitle]=useState("no data provided!");
  let showInput = (event)=>{
    let text=event.target.value;
    if (!text){text="no data provided!"};
    setTitle(text)
    }
    return(
      <div>
        <h1>{title}</h1>
        <input onChange={showInput}/>
      </div>
    )
}

export default App;
