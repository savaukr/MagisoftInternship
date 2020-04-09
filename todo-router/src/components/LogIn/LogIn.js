import React from 'react';
import './logIn.css';

const LogIn = () => {
    return (
        <div className="auth-wrapper">
            <h2>Авторизуйтесь, будь-ласка:</h2>
            <form className="auth__form">
                <label htmlFor="auth__email" >Email:</label>
                <input id="auth__email" name="auth_email" type="email" placeholder="введіть свою електр. адресу"/>
                <label htmlFor="auth__password">Password:</label>
                <input id="auth__password" name="auth_password" type="password" placeholder="введіть пароль"/>
                <button className="auth__submit" type="submit">send</button>
            </form>
        </div>
    )
}
export default LogIn;