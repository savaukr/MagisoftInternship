import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './addTodo.css';

const AddTodo = (props)=> {
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const submitTodo = (event)=>{
        event.preventDefault();
        //const dayInMls = 24*60*60*1000;
        //let defaultDueDate = new Date(new Date().getTime() + dayInMls);
        //defaultDueDate = dueDate ?  dueDate: `${defaultDueDate.getFullYear()}-${defaultDueDate.getMonth()+1}-${defaultDueDate.getDate()}`;
        if (title.trim() && dueDate) {
            props.createTodo(title, dueDate);
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