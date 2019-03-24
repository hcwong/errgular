// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '../store';
import { Home } from './home';

import './../stylesheets/main.scss';

class App extends React.Component<{}, {}> {
  render() {
    return(
      <Home/>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode,
);

if (module.hot) {
  module.hot.accept();
}
