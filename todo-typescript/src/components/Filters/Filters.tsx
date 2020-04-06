import React from 'react';
import PropTypes from 'prop-types';
import   cn  from 'classnames';
import './filters.css';

interface IProps {
    filterTodos: Function
    objFilters: {
        [key:string]:boolean
    }
}
const Filters: React.SFC<IProps> = ({ filterTodos, objFilters }:IProps) => {
   const clickFilter = (nameFilter: string) => { 
        filterTodos(nameFilter);
    }
    const buttons = [];
    for (let k  in objFilters) {
        let filterClassname = cn({
            filters_button: true,
            active: objFilters[k]
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
    
// Filters.propTypes ={
//     filterTodos: PropTypes.func.isRequired,
//     objFilters: PropTypes.object.isRequired
// }
export default Filters;
