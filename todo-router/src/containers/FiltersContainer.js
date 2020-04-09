import React from 'react';
import { connect } from 'react-redux';

import Filters from '../components/Filters/Filters.js';
import { filterTodoDispatchAction } from '../actions/actions.js';

const FiltersContainer = (props) => {
	return <Filters {...props} />
}
const mapStateToProps = (state) => {
	return {
		objFilters: state.infoTodos.objFilters
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		filterTodos: (nameFilter)=>{
			dispatch(filterTodoDispatchAction(nameFilter))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);