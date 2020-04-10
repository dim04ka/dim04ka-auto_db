import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Context from './context/context'
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/store';

import App from './App';

ReactDOM.render(
  <ReduxProvider store={store}>
    <Context.Provider>
      <App />
    </Context.Provider>
  </ReduxProvider>

    
 
, document.getElementById('root'));

