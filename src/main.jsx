import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import Views from './views';
import './main.scss'


function Main({store, Browser, broswerProps={}}) {
  return (
    <ReduxProvider store = {store}>
      <Browser {...broswerProps}>
        <Views/>
      </Browser>
    </ReduxProvider>
  );
}

export default Main;
