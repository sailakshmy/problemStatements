import authReducer from './authReducer';
import workflowReducer from './workflowReducer';
import nodeReducer from './nodeReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    workflow: workflowReducer,
    node: nodeReducer
});

export default rootReducer;