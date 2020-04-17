import React, { useCallback, useContext } from 'react';
import './login.css';
import { withRouter, Redirect } from 'react-router-dom';
import app from "../../base";
import { AuthContext } from "../Auth/Auth";

const Login = ({ history  }) => {
  let path='/todolist/';
  const { currentUser } = useContext(AuthContext);
    const handleLogin = useCallback(
        async event => {
          event.preventDefault();
          const { email, password } = event.target.elements;
          if ( email.value.trim() && password.value.trim() ) { 
            try {
              await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
              if (!!currentUser) history.push(path+currentUser.uid);
            } catch (error) {
              alert(error);
            }
          } else alert('Email or password empty');
        },
        [history]
      );

    if (!!currentUser) {
       return <Redirect to= {path+currentUser.uid} />;
    }
    return (
        <div className="auth-wrapper">
            <h2>Авторизуйтесь, будь-ласка:</h2>
            <form className="auth__form" onSubmit={handleLogin} >
                <label htmlFor="auth__email" >Email:</label>
                <input id="auth__email" name="email" type="email" placeholder="введіть свою електр. адресу"/>
                <label htmlFor="auth__password">Password:</label>
                <input id="auth__password" name="password" type="password" placeholder="введіть пароль"/>
                <div className="auth_buttons">
                    <button className="auth__button" type="submit">Log in</button>
                    <button className = "auth__button" type="button" onClick={()=>{history.push('/signup')}}>Sign up</button>
                </div>            
            </form>
        </div>
    )
}
export default withRouter( Login );