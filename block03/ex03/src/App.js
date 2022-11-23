import './App.css';
import React,{useState} from 'react'
import User from './User.js'
import Password from './Password';
import Button from './Button';

function App() {
  const [user,setUser]=useState('');
  const [password,setPassword]=useState('');
  const [button,setButton]=useState(false);
  let storeButton=(e)=>{setButton(true)}
  let storePassword=(e)=>{setPassword(e.target.value)}
  let storeUser=(e)=>{setUser(e.target.value)};

  let Alert=()=>{
    if (button){alert(`user:${user} and password ${password[0]}**** is stored`)}
  }


  return (
    <div className="App">
      {User()}
      {Password()}
      {Button()}
      {Alert()}
    </div>
  );
}

export default App;
