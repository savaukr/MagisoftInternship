import React from 'react';
import PropTypes from 'prop-types';
import './filters.css';
import cn from 'classnames';

const Filters = ({ filterTodos, objFilters }) => {
   const clickFilter = (e, nameFilter) => { 
        filterTodos(nameFilter);
    }
    const btnClassname  = {};
    for (let key in objFilters) {
        btnClassname[key] = cn({
            'filters_button': true,
            'active': objFilters[key]
        })
    }
    const arrFilters = Object.keys(objFilters);
    const buttons =  arrFilters.map((nameFilter)=>(
        <button key={nameFilter} className={btnClassname[nameFilter]} onClick={(e)=>clickFilter(e,  nameFilter)} >{nameFilter}</button>
    ));
   
    return (
        <div className="filters">
            {buttons}
        </div>
    )
}
    
Filters.propTypes ={
    filterTodos: PropTypes.func.isRequired,
    objFilters: PropTypes.object.isRequired
}
export default Filters;