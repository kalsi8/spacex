import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';
import Main from './main';
import configureStore from './state/store'

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const reduxStore = configureStore(preloadedState); // for SSR

hydrate(
  <Main Browser ={BrowserRouter} store={reduxStore} />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
