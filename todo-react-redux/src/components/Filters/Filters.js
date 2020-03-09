import React, { useState } from 'react';
import './filters.css';

const Filters = (props) => {
    const [objFilters, setObjFilters] = useState({noneFinished:false, outDated:false, tomorrow:false });
    let filterTodos = props.filterTodos;
    function clickFilter(e, filters, nameFilter) {
        e.target.classList.toggle('active'); 
        let {...obj} = filters;
        obj[nameFilter] = !obj[nameFilter];
        setObjFilters(obj);
        filterTodos(obj);
    }
    return (
        <div className="filters">
            <button className="filters__not-finished filters_button" onClick={(e)=>clickFilter(e, objFilters, 'noneFinished')} >not finished</button>
            <button className="filters__out-dated filters_button" onClick={(e)=>clickFilter(e, objFilters, 'outDated')} >out dated</button>
            <button className="filters__tomorrow filters_button" onClick={(e)=>clickFilter(e, objFilters, 'tomorrow')} >tomorrow</button>
        </div>
)}
export default Filters;