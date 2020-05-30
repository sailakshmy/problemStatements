import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//applyMiddleware is imported as it can take a list of middleware and turn them into store enhancers
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
/*thunk will help to return a function(instead of an object that is usually returned by action creators).
this function takes 2parameters - dispatch method,getState(to access the state of the store if neeeded) */
import thunk from 'redux-thunk';


const store= createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
