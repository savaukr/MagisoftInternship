import React from 'react';
import { withRouter } from 'react-router-dom';
import './logIn.css';

const LogIn = ({ history, isAuth }) => {
    let userId=2;
    if (isAuth !== false)  history.push(`/${userId}`);
    return (
        <div className="auth-wrapper">
            <h2>Авторизуйтесь, будь-ласка:</h2>
            <form className="auth__form" onSubmit={(e)=>{
                e.preventDefault();
                if (isAuth !== false)  history.push(`/${userId}`);
            }}>
                <label htmlFor="auth__email" >Email:</label>
                <input id="auth__email" name="auth_email" type="email" placeholder="введіть свою електр. адресу"/>
                <label htmlFor="auth__password">Password:</label>
                <input id="auth__password" name="auth_password" type="password" placeholder="введіть пароль"/>
                <button className="auth__submit" type="submit">send</button>
            </form>
        </div>
    )

}
export default withRouter( LogIn );