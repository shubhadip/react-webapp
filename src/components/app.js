import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import ReduxThunk from 'redux-thunk';
import ReduxToastr from 'react-redux-toastr';
import Routes from '../router/router';
// import reducers from '../reducers';
import { AUTH_USER } from '../actions/types';
import { getFromCookie } from '../credentials/access_credentials';
import store from '../store';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middlewares = [ReduxThunk];

// if (process.env.NODE_ENV === `development`) {
//   const { logger } = require(`redux-logger`);
//   middlewares.push(logger);
// }

// const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(createStore);
// const store = createStoreWithMiddleware(reducers);
const token = getFromCookie('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

export default class App extends Component {
/* {this.props.children} Not Required AnyMore */
// className={styles.app}
  render() {
    return (
      <Provider store={ store } >
        <div>
          <Routes />
          <ReduxToastr
            newestOnTop={ false }
            preventDuplicates
            position='bottom-center'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
          />
        </div>
      </Provider>
    );
  }
}
