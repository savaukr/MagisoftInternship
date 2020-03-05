import React from 'react';
import {connect} from 'react-redux';
import App from '../App';
import {setTodosAction} from '../store/actions/actionTodos';

function AppContainer(props) {
    return (
        <App todos={props.todos}/>
    )
}

const mapStateToProps = state => {
    return {
        todos:state.todos
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setTodosFunction: todos=>{   
            dispatch(setTodosAction(todos))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

