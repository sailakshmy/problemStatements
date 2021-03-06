import React, {Component} from 'react';
//To connect the component to the Redux store
import {connect} from 'react-redux';
//Dispatch the Create_workflow action to the Action Creator by using mapDispatchToProps and connect
import {createWorkflow} from '../../store/actions/workflowActions';
//To Redirect the user if not signed in
import {Redirect} from 'react-router-dom';


class CreateWorkflow extends Component{
    state={
        workflowTitle:'',
        workflowStatus:'pending'
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createWorkflow(this.state);
        //Rerouting the user back to the dashboard
        this.props.history.push('/');
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
        const {auth} = this.props;
        if(!auth.uid)
            return <Redirect to='/signin' />
        return(
        <div className="container">
        <form onSubmit={this.handleSubmit} className="white" >
            <h5>Create Workflow</h5>
            <div className="divider"></div>
            <div className="input-field">
            <label htmlFor='workflowTitle'>Workflow Title</label>
            <input type="text" id='workflowTitle' onChange={this.handleChange}/> 
            </div>
            <div className="divider"></div>
            <div className="input-field">
                <button className="btn green" onClick={this.handleSubmit}>Add Workflow</button>
            </div>
        </form>
    </div>
    )
}

}

const mapDispatchToProps=(dispatch)=>{
    //Whatever property is to be added to the props can be added to the return Object
    return{
        /*so when props.createWorkflow is invoked(inside the handleSubmit function), it will run this function, take in that workflow 
        and perform a dispatch to the action Creator with the new workflow details*/
        createWorkflow: (workflow)=>dispatch(createWorkflow(workflow))

    }
}
const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkflow);
