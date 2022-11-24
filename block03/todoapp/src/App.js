import './App.css';
import React, {useState} from 'react'
import list from './list.json'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [todos,setTodos]= useState(list);

  const todoDone =(id)=>{

    setTodos(todos.map((todo)=>{
      return todo.id===Number(id) ? {...todo,done:!todo.done}:{...todo}
    }))
  }
  const deleteItem=(id)=>{
    setTodos([...todos].filter(todo=>todo.id!==id))
  }

  const addTodo =(newTodo)=>{
    let maxId= Math.max(...todos.map(o => o.id));
    console.log(maxId)
    let newItem={id:maxId+1,content:newTodo,done:false};
    setTodos([...todos,newItem])
  }
  return (
    <div className="App">
      <header>
      <h1> ToDo App</h1>
      </header>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} todoDone={todoDone} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
