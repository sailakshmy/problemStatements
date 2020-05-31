import authReducer from './authReducer';
import workflowReducer from './workflowReducer';
import nodeReducer from './nodeReducer';
import {combineReducers} from 'redux';
//To sync the Firetstore data with the redux store data
import {firestoreReducer} from 'redux-firestore';
//To sync the firebase authentication data
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    workflow: workflowReducer,
    node: nodeReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;