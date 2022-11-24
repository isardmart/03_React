import React,{useState} from 'react'


export default function Todo({todo,todoDone,deleteItem}) {
    const cross=()=>{
        return{
            textDecoration:todo.done?'line-through':'none',
        }
    }
    const [hovered,setHovered]=useState(false);
    
    const deleteAppear=(e)=>{
        e.preventDefault();
        setHovered(true)
    }
    const deleteDisappear=(e)=>{
        e.preventDefault();
        setHovered(false)
    }
    let close = ()=>{return hovered? 'closenow':'close' }

  return (
    <div class="todo" onMouseOver={deleteAppear} onMouseOut={deleteDisappear} id="todo" style={cross()}>
        <input type="checkbox" checked={todo.done} 
        onChange={()=>todoDone(todo.id)}/>
        {todo.content}
        <button class={close()} onClick={()=>deleteItem(todo.id)}/>
    </div>
  )
}

