import React from 'react';
import './App.css';

class App extends React.Component{
  state={
    title:"no data provided!",
  }
  showInput = (event)=>{
    let text=event.target.value;
    if (!text){text="no data provided!"};
    this.setState({'title':text})
    }
  
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <input onChange={this.showInput}/>
      </div>
    )
  }
} 

export default App;
