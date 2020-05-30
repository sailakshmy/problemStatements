import React, {Component} from 'react';
//Connect the component to redux store
import {connect} from 'react-redux';
//Dispatch the create node action to the actionCreator by using mapDispatchToProps and connect
import {createNode} from '../../store/actions/nodeActions';

class CreateNode extends Component{
    state={
        nodeNumber:'',
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
        return(
                <div>
                    <div className="divider"></div>
                    <div className="container">
                        <form className="white">
                            <h5>Create Node</h5>
                            <div className="card">
                                <div className="divider"></div>
                                <div className="card-content input-field">
                                    <label htmlFor='nodeNumber'>Node Number</label>
                                    <input type="text" id='nodeNumber' onChange={this.handleChange}/> 
                                </div>
                                <div className="divider"></div>
                                <div className="card-content input-field">
                                    <label htmlFor='nodeDetails'>Node Details</label>
                                    <textarea  className="materialize-textarea" id='nodeDetails' onChange={this.handleChange}></textarea>
                                </div>
                                <div className="input-field">
                                    <button className="btn green right" onClick={this.handleSubmit}>Create Node</button>                                
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="divider"></div>
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
