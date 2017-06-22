import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import ReduxToastr from 'react-redux-toastr';

import reducers from './reducers';
import { AUTH_USER } from './actions/types';
import { getFromCookie } from './credentials/access_credentials';
import Routes from './router';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [ReduxThunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore);
const store = createStoreWithMiddleware(reducers);
const token = getFromCookie('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={ store } >
    <div>
      <Routes />
      <ReduxToastr
        newestOnTop={false}
        preventDuplicates
        position="bottom-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"/>
      </div>
  </Provider>
  , document.querySelector('.top'));
