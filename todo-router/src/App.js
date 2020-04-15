import React  from 'react';
import './App.css';

//import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AuthProvider } from './components/Auth/Auth';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp'

//import { readJson } from './actions/actions.js';
import PrivateRoute from './PrivateRoute';

const  App = () => {
  //const dispatch = useDispatch();
 // useEffect(() => dispatch( readJson() ));
  return (
    <AuthProvider>
      <Router>
          <div className="todos-wrapper">
            <Header/>
            <Switch>
              <Route path='/login' exact component={ Login } />
              <Route path='/signup' exact component={ SignUp } />
              <PrivateRoute exact path='/todolist/:userid' component={ Home } />
              <Redirect to='/login' />
            </Switch> 
          </div>
      </Router>
    </AuthProvider>
  );
}
export default  App;
