import React from 'react';
import PropTypes from 'prop-types';
import './filters.css';
import cn from 'classnames';

const Filters = ({ filterTodos, objFilters }) => {
   const clickFilter = (nameFilter) => { 
        filterTodos(nameFilter);
    }
    const buttons = [];
    for (let k in objFilters) {
        let filterClassname = cn({
            'filters_button': true,
            'active': objFilters[k]
        })
        buttons.push(
            <button key={k} className={filterClassname} onClick={(e)=>clickFilter( k)} >{k}</button>
        ) 
    }
      
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