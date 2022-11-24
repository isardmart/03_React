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
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <input type='text' value={textInput} onChange={handleChange}/>
            <button>Add todo</button>
        </form>
    </div>
  )
}
