import React from 'react';
import PropTypes from 'prop-types';
import './filters.css';

const Filters = ({todos, objFilters, filterTodos}) => {
    function clickFilter(e, nameFilter) {
        e.target.classList.toggle('active'); 
        filterTodos(todos, objFilters, nameFilter);
    }
    return (
        <div className="filters">
            <button className="filters__not-finished filters_button" onClick={(e)=>clickFilter(e,  'noneFinished')} >not finished</button>
            <button className="filters__out-dated filters_button" onClick={(e)=>clickFilter(e, 'outDated')} >out dated</button>
            <button className="filters__tomorrow filters_button" onClick={(e)=>clickFilter(e, 'tomorrow')} >tomorrow</button>
        </div>
)}
    
Filters.propTypes ={
    filterTodos: PropTypes.func.isRequired
}
export default Filters;