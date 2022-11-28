import React,{useState,useEffect} from 'react'

export default function Form({messageSetter,styleSetter,style}) {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [password2,setPassword2]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email.search('@')===-1||(email.slice((email.indexOf('@'))+1)).search('@')!==-1){
            styleSetter('red');
            messageSetter("Please, provide a valid email.");
        }else {if( password!==password2){
            styleSetter('red');
            messageSetter('Passwords should match.')
        }else {if(password.length<8){
            styleSetter('red');
            messageSetter('Password must have at least 8 characters.')
        }else{
            styleSetter('green');
            messageSetter('Successfully registered');
        }
    }
    }
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          styleSetter('transparent');
        }, 2000);
      
        return () => clearTimeout(timeoutId);
      }, [style]);


  return (
    <form onSubmit={handleSubmit}>
        <input onChange={(e)=>setEmail(e.target.value)} placeholder='email'></input>
        <input onChange={(e)=>setPassword(e.target.value)} placeholder='password'></input>
        <input onChange={(e)=>setPassword2(e.target.value)} placeholder='password2'></input>
        <button>Submit</button>
    </form>
  )
}
