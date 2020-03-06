import React from 'react';
import './addTodo.css';

const AddTodo = ()=> {
    return (
        <form className="form-add">
            <input type="text"/>
            <input type="date"/>
            <button type='submit' className="form-add__submit">+</button>
        </form>
    )
}
export default AddTodo;