import React from 'react';
import './header.css';

const Header = ()=>{
    let date = new Date();
    const monthes=['JAN', 'FEB', 'MAT', 'APR', 'MAY', 'JUN', 'JUL', 'AG', 'SEP', 'OCT', 'NOV', 'DECM'];
    const days = ['SUN', 'MON', 'TU', 'WEN', 'TH', "FR", "SAT"];
    return (
        <div className="todo__date">
            <div className="todo__dateMonthYear">
            <div className="todo__dt">{date.getDate()}</div>
                <div className="todo__monthYear">	
                    <div className="todo__month">{monthes[date.getMonth()]}</div>
                    <div className="todo__year">{date.getFullYear()}</div>
                </div>
            </div>
            <div className="todo__day">{ days[date.getDay()]}</div>	
        </div>
    )
}
export default Header;