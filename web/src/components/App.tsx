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

// Service Worker
if ('serviceWorker' in navigator) {
  console.log("Able to install service workers");
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('registration successful with scope: ', registration.scope);
    }).catch((err) => {
      console.log('serviceWorker registraton failed', err);
    });
  });
}
