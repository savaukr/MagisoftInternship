import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './addTodo.css';

import  { PropsType } from '../../containers/AddTodoContainer'

const AddTodo: React.SFC<PropsType> = ({ createTodo }:PropsType)=> {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const todo = {title:title, createDate: new Date(), dueDate:dueDate, isDone:false}
    const submitTodo = (event:any)=>{
        event.preventDefault();
        if (title.trim() && dueDate) {
            createTodo(todo);
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
    createTodo: PropTypes.func.isRequired
}

export default AddTodo;