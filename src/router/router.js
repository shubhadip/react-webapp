import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';

import Welcome from '../components/welcome';
import Header from '../components/header';
import { Foo, Service, About, Feature } from '../components/HOC/import_calls';
import Signin from '../components/auth/signin';
import Signout from '../components/auth/signout';
import Signup from '../components/auth/signup';
// import { onFeatureEnter } from './routeCallbacks';

const NotFound = () =>{ return <div>Not Found</div> };

const Routes = () => {
  return (<Router history={ history }>
    <div>
      <Header />
      <Switch>
        <Route path='/signin' component={ Signin } />
        <Route path='/signout' component={ Signout } />
        <Route path='/signup' component={ Signup } />
        <Route exact path='/' component={ Welcome } />
        <Route path='/feature' component={ Feature } />
        <Route path='/service' component={ Service } />
        <Route path='/about' component={ About } />
        <Route path='/foo' component={ Foo } />
        <Route path='*' component={ NotFound } />
      </Switch>
    </div>
  </Router>);
};
// <Route path='/feature' render={ () => { onFeatureEnter(); return <Feature />; } } /> 
export default Routes;
