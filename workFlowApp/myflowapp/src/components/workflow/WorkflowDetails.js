import React,{Component} from 'react';
import NodeList from '../nodes/NodeList';
//Connect the component to redux store
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
/**To explicitly inform Firebase as to which component is active. This component is where the updated Nodes
 * in the DB should be displayed. */
import {firestoreConnect} from 'react-redux-firebase';
//To use more than 1 higher order components and chain them together
import {compose} from 'redux';
//To import the deleteNode actionCreator
import {deleteNode} from '../../store/actions/nodeActions';


class WorkflowDetails extends Component{
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleDelete=(e)=>{
        console.log(this.props.nodes.length);
        console.log(this.props.nodes[this.props.nodes.length-1]);
        console.log(this.props.match.params.id);    
        this.props.deleteNode(this.props.nodes[this.props.nodes.length-1],this.props.match.params.id);

    }
    render(){
        console.log(this.props);
        const{nodes, workflow} = this.props;
        console.log(workflow);
        const id = this.props.match.params.id;
        if(workflow){
            return(
            <div>
                <div className="divider"></div>
                    <div className="section">
                        <div className="row">
                            <div className="col s3">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label htmlFor='searchBar'></label>
                                        <input type="text" id='searchBar' value={workflow.workflowTitle} onChange={this.handleChange}/>
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
                                        <Link to={'/createnode/'+ id} className="btn btn-large green darken-4 accent-4" id='createWorkflowButton'>
                                        <i className="material-icons left">add</i>
                                        Add Node
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col s2 right">
                                <div className="row" id='createWorkflowButton'>
                                    <div className="input-field col s12">
                                        <label htmlFor='shuffleNode'></label>
                                        <button className="btn btn-large red darken-4 accent-4" id='createWorkflowButton' onClick={this.handleDelete}>
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
        else{
        return(
            <div className="container center">Loading Workflow...</div> 
        )
        }
    }

}
//This is done to reflect the state of the redux store as data on the UI, instead of using Hardcoded data
//ownProps will give access to the props of this component
const mapStateToProps=(state, ownProps)=>{
    console.log(state);
    const id = ownProps.match.params.id;
    const workflows = state.firestore.data.workflows;
    const workflow = workflows ? workflows[id] : null;
    return{
        nodes: state.firestore.ordered.nodes,//state.node.nodes,
        workflow: workflow

    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteNode:(node,id)=>dispatch(deleteNode(node,id))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection:'workflows'},
        {collection:'nodes',orderBy:['createdAt','asc']}
    ])
)(WorkflowDetails);