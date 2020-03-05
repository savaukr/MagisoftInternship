import React , {useState} from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList'

function App() {
  const [todos, setTodos] = useState([
    {id:'1', title:"test task", createDate:new Date(), dueDate:"2020-03-25", isDone:false}
  ]); 
  return (
    <div className="todos-wrapper">
      <h1>Todo list</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
