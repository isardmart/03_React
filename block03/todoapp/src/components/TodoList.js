import React from 'react'
import Todo from './Todo'
export default function TodoList({todos,todoDone, deleteItem}) {
  return (
    <div>
        {
            todos.map((todo,indx)=>(
                <Todo key={`todo${indx}`} todo={todo} todoDone={todoDone} 
                deleteItem={deleteItem}/>
            ))
        }
    </div>
  )
}
