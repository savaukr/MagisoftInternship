import React , {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Context from './context';
import AddTodo from './components/AddTodo/AddTodo';
import Filters from './components/Filters/Filters';


function App() {
  const [todos, setTodos] = useState([
    {id:"1", title:'first task', createDate: new Date(), dueDate:'2020-05-06', isDone:true },
    {id:"2", title:'tommorow', createDate: new Date(), dueDate:'2020-03-08', isDone:false },
  ]);
  const [todosFilter, setTodosFilter] = useState(todos);
  

  const changeIsDone = (id, arr = [].concat(todos)) => {
    setTodos(arr.map(todo=>{
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    }))
  }
  const removeTodo = (id, arr = [].concat(todos)) => {
    setTodos(arr.filter(todo=>todo.id !== id));
    setTodosFilter(arr.filter(todo=>todo.id !== id))
  }
  const addTodo = (title, dueDate) => {
    let id = todos.length ? +todos[todos.length-1].id+1 : 1;
    id = id.toString();
    setTodos(todos.concat([{id:id, title:title, createDate: new Date(), dueDate:dueDate, isDone:false}]));
    setTodosFilter(todos.concat([{id:id, title:title, createDate: new Date(), dueDate:dueDate, isDone:false}]));
  }
  const filterTodos = (objFilters, arr = [].concat(todos)) => {
    const dayInMls = 24*3600*1000;
    if (objFilters.noneFinished) arr = arr.filter( todo => todo.isDone === false );
    if (objFilters.outDated) arr = arr.filter( todo=>
      ( new Date(todo.dueDate).getTime()+dayInMls ) < ( new Date().getTime() )          
    );
    if (objFilters.tomorrow) arr = arr.filter( todo =>
      ( ( new Date(todo.dueDate).getTime() < new Date().getTime()+dayInMls ) && ( new Date(todo.dueDate).getTime() > new Date() ))
    )
    //console.log(todos);
    //console.log(arr);
    setTodosFilter(arr);
    //console.log(todosFilter);
}

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
        <div className="todos-wrapper">
          <Header/>
          <AddTodo createTodo={addTodo} />
          <Filters filterTodos = {filterTodos}/>
          <TodoList todos={todosFilter} changeIsDone={changeIsDone} />
        </div>
    </Context.Provider>

  );
}

export default App;