import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/app';

function render(Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>
  , document.querySelector('.top'));
}

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.querySelector('.top'),
      );
  });
}
render(App);
