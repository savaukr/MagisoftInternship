import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './addTodo.css';

const AddTodo = ({todos, createTodo})=> {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const submitTodo = (event)=>{
        event.preventDefault();
        if (title.trim() && dueDate) {
            createTodo(todos, title, dueDate);
            setTitle('');
            setDueDate('');
        }
    }
    return (
        <form className="form-add" onSubmit={submitTodo}>
            <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)}/>
            <input type="date" value={dueDate} onChange={(event)=>setDueDate(event.target.value)}/>
            <button type='submit' className="form-add__submit">+</button>
        </form>
    )
}

AddTodo.propTypes ={
    todos: PropTypes.array,
    createTodo: PropTypes.func.isRequired
}

export default AddTodo;