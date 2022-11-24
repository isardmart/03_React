import './App.css';
import React,{useState} from 'react';
import User from './User';
import Password from './Password';
import Button from './Button';

function App() {
  const [user,setUser]=useState('');
  const [password,setPassword]=useState('');

  return (
    <div className="App">
   <User userSetter={setUser} />
   <Password passwordSetter={setPassword}/>
   <Button userState={user} passwordState={password}/>
   </div>
  );
}

export default App;
