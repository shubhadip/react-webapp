import React from 'react';
import { Router, Switch, Route, Match } from 'react-router-dom';
import history from './history';

import App from './components/app';
import Header from './components/header';
import { Foo, About, Service, Welcome, Feature } from './components/code_split/import_calls'
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';

const Routes = () => {
  return (<Router history={history}>
    <div>
    <Header />
    <Switch>
      <Route path='/signin' component={ Signin } />
      <Route path='/feature' component={ (Feature) } />
      <Route path='/signout' component={ Signout } />
      <Route path='/signup' component={ Signup } />
      <Route path='/service' component={ Service } />
      <Route path='/about' component={ About } />
      <Route path="/foo" component={ (Foo) } />
      <Route path="/welcome" component={ (Welcome) } />
      <Route exact path="/" component={App}/>
    </Switch>
    </div>
</Router>)  
}

export default Routes;
