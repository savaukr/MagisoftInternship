import React from 'react';
import './filters.css';

const Filters = (props) => {
    //const [objFilters, setObjFilters] = useState({noneFinished:false, outDated:false, tomorrow:false });
    //let objFilters = props.objFilters;
    let filterTodos = props.filterTodos;
    function clickFilter(e, nameFilter) {
        e.target.classList.toggle('active'); 
        //let {...obj} = filters;
        //obj[nameFilter] = !obj[nameFilter];
        //setObjFilters(obj);
        filterTodos(nameFilter);
    }
    return (
        <div className="filters">
            <button className="filters__not-finished filters_button" onClick={(e)=>clickFilter(e,  'noneFinished')} >not finished</button>
            <button className="filters__out-dated filters_button" onClick={(e)=>clickFilter(e, 'outDated')} >out dated</button>
            <button className="filters__tomorrow filters_button" onClick={(e)=>clickFilter(e, 'tomorrow')} >tomorrow</button>
        </div>
)}
export default Filters;