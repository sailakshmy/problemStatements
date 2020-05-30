import React,{Component} from 'react';
import NodeList from '../nodes/NodeList';
//Connect the component to redux store
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class WorkflowDetails extends Component{
    render(){
        console.log(this.props);
        const{nodes} = this.props;
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
                                        <Link to='/createnode' className="btn btn-large green darken-4 accent-4" id='createWorkflowButton'>
                                        <i className="material-icons left">add</i>
                                        Add Node</Link>
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
                    <NodeList nodes={nodes}/>
                </div>
            </div>
            
        )
    }

}
//This is done to reflect the state of the redux store as data on the UI, instead of using Hardcoded data
const mapStateToProps=(state)=>{
    return{
        nodes: state.node.nodes
    }
}


export default connect(mapStateToProps)(WorkflowDetails);