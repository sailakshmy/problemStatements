import React, {Component} from 'react';
//Connect the component to redux store
import {connect} from 'react-redux';
//Dispatch the create node action to the actionCreator by using mapDispatchToProps and connect
import {createNode} from '../../store/actions/nodeActions';



class CreateNode extends Component{
    state={
        nodeTitle:'',
        nodeDetails:''
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createNode(this.state);
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    render(){
        return (
        <div className="container">
        <form onSubmit={this.handleSubmit} className="white" >
            <h5>Create Node</h5>
            <div className="divider"></div>
            <div className="input-field">
            <label htmlFor='nodeTitle'>Node Title</label>
            <input type="text" id='nodeTitle' onChange={this.handleChange}/> 
            </div>
            <div className="divider"></div>
             <div className="input-field">
             <label htmlFor='nodeDetails'>Node Details</label>
            <textarea  className="materialize-textarea" id='nodeDetails' onChange={this.handleChange}></textarea>
            </div>
            <div className="input-field">
                <button className="btn green" onClick={this.handleSubmit}> Add Node</button>
            </div>
        </form>
    </div>
    )
}

}

const mapDispatchToProps=(dispatch)=>{
    //Whatever property is to be added to the props can be added to the return object
    return{
        /**So whenever props.createNode is invoked (inside the handleSubmit function), the following function is executed. The newly created
         * node is taken and dispatched to the action creator*/
        createNode:(node)=>dispatch(createNode(node))
    }
}


export default connect(null, mapDispatchToProps)(CreateNode);
