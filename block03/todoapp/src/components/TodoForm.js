import React,{useState} from 'react'


export default function TodoForm({addTodo}) {
    const[textInput,settextInput]=useState('');

    const handleChange=(e)=>{
        settextInput(e.target.value)
    };

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(textInput.trim()!==''){
            addTodo(textInput);
            settextInput('');
        }
    }
  return (
    <div >
        <form className='form' onSubmit={handleSubmit}>
            <input className='input' type='text' value={textInput} onChange={handleChange}/>
            <button className='add'>+</button>
        </form>
    </div>
  )
}
