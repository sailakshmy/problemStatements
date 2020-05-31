import React,{Component} from 'react';
import {connect} from 'react-redux';
import {deleteWorkflow} from '../../store/actions/workflowActions';


class WorkflowSummary extends Component{
    handleIconClick=(e)=>{
        console.log('Icon clicked');
        console.log(this.props);
        this.props.deleteWorkflow(this.props.workflow);
        //this.props.history.push('/');
        
    }
    render(){
        const {workflow} = this.props;
    
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <i className="material-icons right" onClick={this.handleIconClick}>delete</i>
                    <span></span>
                    <p className="card-title">{workflow.workflowTitle}</p>   
                </div>
                <div className="divider"></div>
                <div className="card-content input-field">
                    <i className="material-icons right grey circle">done</i>
                </div>

            </div>
        </div>
    )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        deleteWorkflow:(workflow)=>dispatch(deleteWorkflow(workflow))
    }
}
export default connect(null, mapDispatchToProps)(WorkflowSummary);