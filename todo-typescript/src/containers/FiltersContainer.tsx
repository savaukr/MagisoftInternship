import React from 'react'
import { connect } from 'react-redux'

import Filters from '../components/Filters/Filters'
import { filterTodoDispatchAction } from '../actions/actions'
import { typeFilters } from '../types/interfaces'
import { StateReducerType } from '../reducers/index'
//import { DispatchType } from '..'

interface IProps {
	filterTodos: Function
    objFilters: typeFilters
}

const FiltersContainer: React.SFC<IProps> = (props:IProps) => {
	return <Filters {...props} />
}
const mapStateToProps = ( state: StateReducerType ) => {
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