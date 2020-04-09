import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="logInAuth">
            <Link className="header__link" to="/login">LogIn</Link>      
            <Link className="header__link" to="/auth">Auth</Link>
        </div>
    )
}
export default Navigation;