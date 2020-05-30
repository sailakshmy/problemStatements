import React,{Component} from 'react';
import NodeList from '../nodes/NodeList';
import {connect} from 'react-redux';

class WorkflowDetails extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <div className="divider"></div>
                    <div className="section">
                        <div className="row">
                            <div className="col s3">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label htmlFor='searchBar'></label>
                                        <input type="text" placeholder='Workflow Name' id='searchBar'/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col s2 right">
                                <div className="row" id='createWorkflowButton'>
                                    <div className="input-field col s12">
                                        <label htmlFor='save'></label>
                                        <button className="btn btn-large blue darken-4 accent-4" id='createWorkflowButton'>
                                        Save </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col s2 right">
                                <div className="row" id='createWorkflowButton'>
                                    <div className="input-field col s12">
                                        <label htmlFor='createNode'></label>
                                        <button className="btn btn-large green darken-4 accent-4" id='createWorkflowButton'>
                                        <i className="material-icons left">add</i>
                                        Add Node</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col s2 right">
                                <div className="row" id='createWorkflowButton'>
                                    <div className="input-field col s12">
                                        <label htmlFor='shuffleNode'></label>
                                        <button className="btn btn-large red darken-4 accent-4" id='createWorkflowButton'>
                                        <i className="material-icons left">clear</i>
                                        Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col s2 right">
                                <div className="row" id='createWorkflowButton'>
                                    <div className="input-field col s12">
                                        <label htmlFor='shuffleNode'></label>
                                        <button className="btn btn-large purple darken-4 accent-4" id='createWorkflowButton'>
                                        <i className="material-icons left">shuffle</i>
                                        Shuffle </button>
                                    </div>
                                </div>
                            </div>                                                      
                        </div>
                    </div>
                <div className="divider"></div>
                <div className="dashboard">
                    <NodeList/>
                </div>
            </div>
            
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        nodes: state.node.nodes
    }
}


export default connect(mapStateToProps)(WorkflowDetails);