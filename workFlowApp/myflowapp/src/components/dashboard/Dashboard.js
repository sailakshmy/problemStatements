import React, {Component} from 'react';
import WorkflowList from '../workflow/WorkflowList';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Dashboard extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
            <div className="divider"></div>
                <div className="section">
                    <div className="row">
                        <div className="col s3">
                            <div className="row" id='topbarsearch'>
                                <div className="input-field col s12">
                                    <label htmlFor='searchBar'></label>
                                    <i className="material-icons prefix">search</i>
                                    <input type="text" placeholder='Search Workflows' id='searchBar'/>
                                </div>
                            </div>
                        </div>
                        <div className="col s3">
                            <div className="row" id='filterbutton'>
                                <div className="input-field col s12">
                                    <label htmlFor='filterbutton'></label>
                                    <a className="btn btn-large white black-text dropdown-trigger" href='#' 
                                    data-target='dropdown1' id='filterbutton'>
                                        <i className="material-icons left">filter_list</i>
                                    Filter</a>
                                    <ul className="dropdown-content" id='dropdown1'>
                                        <li><a href="#">All</a></li>
                                        <li><a href='#'>Completed</a></li>
                                        <li><a href='#'>Pending</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col s3 right">
                            <div className="row" id='createWorkflowButton'>
                                <div className="input-field col s12">
                                    <label htmlFor='createWorkflowButton'></label>
                                    <Link to='/createworkflow'className="btn btn-large green darken-4 accent-4" id='createWorkflowButton'>
                                        <i className="material-icons left">add</i>
                                    Create Workflow</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="divider darken-4"></div>
            <div className="dashboard">
                <div className="row">
                    
                    <WorkflowList/>
                </div>
            </div>


            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        workflows: state.workflow.workflows
    }
}

export default connect(mapStateToProps)(Dashboard);