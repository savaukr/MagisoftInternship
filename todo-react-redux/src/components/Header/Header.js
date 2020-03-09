import React from 'react';
//import {useEffect} from 'react';
import './header.css';

const Header = ()=>{
    let date = new Date();
    const setHeaderDate = (date)=>{
            let monthes=['JAN', 'FEB', 'MAT', 'APR', 'MAY', 'JUN', 'JUL', 'AG', 'SEP', 'OCT', 'NOV', 'DECM'];
            let days = ['SUN', 'MON', 'TU', 'WEN', 'TH', "FR", "SAT"]
            document.querySelector('.todo__dt').innerHTML=date.getDate();
            document.querySelector('.todo__month').innerHTML=monthes[date.getMonth()];
            document.querySelector('.todo__year').innerHTML=date.getFullYear();
            document.querySelector('.todo__day').innerHTML = days[date.getDay()];        
    }
    //useEffect(setHeaderDate(date));
    setTimeout(()=>{setHeaderDate(date)}, 0);
    return (
        <div className="todo__date">
            <div className="todo__dateMonthYear">
                <div className="todo__dt"></div>
                <div className="todo__monthYear">	
                    <div className="todo__month"></div>
                    <div className="todo__year"></div>
                </div>
            </div>
            <div className="todo__day"></div>	
        </div>
    )
}
export default Header;