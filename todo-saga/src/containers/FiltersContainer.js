import React from 'react';
import { connect } from 'react-redux';

import Filters from '../components/Filters/Filters.js';
import { filterTodosAction } from '../actions/actions.js';

const FiltersContainer = (props) => {
	return <Filters {...props} />
}
const mapStateToProps = (state) => {
	return {
		todos: state.infoTodos.todos,
		objFilters: state.infoTodos.objFilters
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		filterTodos: (todos, objFilters, nameFilter)=>{
			dispatch(filterTodosAction(todos, objFilters, nameFilter))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);