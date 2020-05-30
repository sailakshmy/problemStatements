import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//applyMiddleware is imported as it can take a list of middleware and turn them into store enhancers
//compose is used to add multiple store enhancers to a store
import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
/*thunk will help to return a function(instead of an object that is usually returned by action creators).
this function takes 2parameters - dispatch method,getState(to access the state of the store if neeeded) */
import thunk from 'redux-thunk';
//react-redux-firebase provides binding to firebase service as a whole
/*getFirebase can be used to access the firebase API inside the return function in NodeActions/WorkflowActions
using the function getExtraArgument on thunk.*/
import {getFirebase,ReactReduxFirebaseProvider,isLoaded} from 'react-redux-firebase';
//redux-firebase provides redux bindings for Firestore DB in particular
/*getFirestore can be used to access the firestoreAPI inside the return function in NodeActions/WorflowActions
 using the function getExtraArgument on thunk*/
//reduxFirestore is a store enhancer
import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore';
//firebase and firebaseConfig are imported so that they can passed to the reduxFirestore store enhancer.
import firebase,{firebaseConfig} from './config/fbConfig';



const store= createStore(rootReducer,
  compose(
  /** withExtraArgument allows to pass an extra arguemnt(object) in the return function of nodeActions/
   * workflowActions.*/
  applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
  /**The firebaseConfig and firebase have to be sent as paramters to the reduxFirebase function
   * so that the getFirebase and getFirestore know which project is to be connected. */
  reduxFirestore (firebase,firebaseConfig,{

    firebaseStateName: 'firebaseReducer'
  })
  ));

  const rrfProps = {
    firebase: firebase,
    config: firebaseConfig,
    //config : rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    //userProfile: 'users',//where the profiles are stored in DB
    //presence: 'presence',//where the list of online users is stored in the DB
    //sessions:'sessions'
  }

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
        </ReactReduxFirebaseProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
