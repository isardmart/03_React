import './App.css';
import React, {useState,useEffect} from 'react';

function App() {
  
  const [email,emailSet]=useState('');
  const [password,passwordSet]=useState('');
  const [response,responseSet]=useState('');
  const [responstyle,responstyleSet]=useState('');
  const [seconds,secondSet]=useState(5);
  const [thismessage,thismessageSet]=useState('');
  const [count,countSet]=useState(false);

  const users = [
    { email: "a@a.com", password: "a" },
    { email: "b@b.com", password: "b" },
    { email: "c@c.com", password: "c" },
  ]
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (users.some(value=>value.email===email && value.password===password)){
      responstyleSet('found');
      responseSet("Match found successfully");
    } else{
      responstyleSet('notfound');
      responseSet("Match not found")
    };
    countSet(true);
  };
  const handleEmail=(e)=>{
    emailSet(e.target.value);
  }
  const handlePassword=(e)=>{
    passwordSet(e.target.value);
  }
  useEffect(() => {
    if(count){
    const interval = setInterval(() => {
      console.log('counting')
      if(seconds>0){
      secondSet(seconds - 1);
      thismessageSet(`This message will disappear in ${seconds} seconds`)
    } else{
      responseSet('');
      thismessageSet('');
      clearInterval(interval);
      countSet(false);
      secondSet(5)
    }
    }, 1000);
    return () => clearInterval(interval);
  }
  }, [count,seconds]);
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        Email:
        <input type='email' onChange={handleEmail}/>
        Password
        <input type='password' onChange={handlePassword}/>
        <button>Submit</button>
      </form>
      <h2 className={responstyle}>{response}</h2>
      <p>{thismessage}</p>
    </div>
  );
}

export default App;
