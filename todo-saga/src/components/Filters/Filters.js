import React from 'react';
import PropTypes from 'prop-types';
import './filters.css';
import cn from 'classnames';

const Filters = ({ filterTodos, objFilters }) => {
    function clickFilter(e, nameFilter) { 
        filterTodos(nameFilter);
    }
    const  btnNoneFinishedClass = cn({
        'filters_button': true,
        'active': objFilters['noneFinished']
    })
    const btnOutDAteddClass = cn({
        'filters_button': true,
        'active': objFilters['outDated']
    })
    const btnTomorrowClass = cn({
        'filters_button': true,
        'active': objFilters['tomorrow']
    })
    
    return (
        <div className="filters">
            <button className={btnNoneFinishedClass} onClick={(e)=>clickFilter(e,  'noneFinished')} >not finished</button>
            <button className={btnOutDAteddClass} onClick={(e)=>clickFilter(e, 'outDated')} >out dated</button>
            <button className={btnTomorrowClass} onClick={(e)=>clickFilter(e, 'tomorrow')} >tomorrow</button>
        </div>
)}
    
Filters.propTypes ={
    filterTodos: PropTypes.func.isRequired
}
export default Filters;