import React from 'react';
import { ReactDOM } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './store';
import App from './App';
import {Provider} from 'react-redux';

store.subscribe(()=>console.log(store.getstate()));

ReactDOM.render(
 <>
  <React.StrictMode>
    <Provider stores={store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  
  </>
);
reportWebVitals();


