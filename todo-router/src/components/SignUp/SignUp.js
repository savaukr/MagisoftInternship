import React, { useCallback } from 'react';
import { withRouter } from "react-router";
import app from "../../base";
import './signUp.css';   

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/login");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <h2>Зареєструйтесь, будь-ласка</h2>
      <form className="auth__form" onSubmit={handleSignUp} >
            <label htmlFor="auth__email" >Email:</label>
            <input id="auth__email" name="email" type="email" placeholder="введіть свою електр. адресу"/>
            <label htmlFor="auth__password">Password:</label>
            <input id="auth__password" name="password" type="password" placeholder="введіть пароль"/>
            <div className="auth_buttons">
                <button className = "auth__button" type="submit">Sign up</button>
                <button className = "auth__button" type="buttton" onClick={()=>history.push('/login')}>Log in</button>
            </div>            
      </form>
    </div>
  );
};

export default withRouter(SignUp);