import React,{Component} from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import WorkflowDetails from './components/workflow/WorkflowDetails';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import CreateWorkflow from './components/workflow/CreateWorkflow';
import CreateNode from './components/nodes/CreateNode';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/workflows' component={WorkflowDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route path='/createworkflow' component={CreateWorkflow}/>
          <Route path='/createNode' component={CreateNode}/>
        </Switch>  
      </div>
    </BrowserRouter>
  );
}
}

export default App;
