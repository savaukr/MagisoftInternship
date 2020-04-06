import React from 'react';
import { connect } from 'react-redux';

import Filters from '../components/Filters/Filters';
import { filterTodoDispatchAction } from '../actions/actions';
import {IState, typeFilters} from '../types/interfaces'

interface IProps {
	filterTodos: any
    objFilters: typeFilters
}

const FiltersContainer = (props:IProps) => {
	return <Filters {...props} />
}
const mapStateToProps = ( state: {infoTodos:IState} ) => {
	return {
		objFilters: state.infoTodos.objFilters
	}
}
const mapDispatchToProps = (dispatch: any) => {
	return {
		filterTodos: (nameFilter:string)=>{
			dispatch(filterTodoDispatchAction(nameFilter))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersContainer);