import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Scheme from '../components/Scheme.js';
import Register from '../components/auth/Register.js';
import Login from '../components/auth/Login.js';
import StartPage from '../components/StartPage.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={StartPage} exact={true}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/view" component={Scheme} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
