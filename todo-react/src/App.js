import React , {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Context from './context';
import AddTodo from './components/addTodo/addTodo';

function App() {
  const [todos, setTodos] = useState([
    {id:'1', title:"test task1", createDate:new Date(), dueDate:"2020-03-25", isDone:false},
    {id:'2', title:"test task2", createDate:new Date(), dueDate:"2020-03-25", isDone:true}
  ]); 

  const changeIsDone = (id, arr = [].concat(todos)) => {
    setTodos(arr.map(todo=>{
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    }))
  }
  const removeTodo = (id, arr = [].concat(todos)) => {
    setTodos(arr.filter(todo=>todo.id !== id))
  }
  

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
        <div className="todos-wrapper">
          <Header/>
          <AddTodo/>
          <TodoList todos={todos} changeIsDone={changeIsDone}/>
        </div>
    </Context.Provider>

  );
}

export default App;
