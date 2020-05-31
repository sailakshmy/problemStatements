import React, {Component} from 'react';
import WorkflowList from '../workflow/WorkflowList';
//To Redirect the user if not signed in
import {Link,Redirect} from 'react-router-dom';
//Connect the component to redux store
import {connect} from 'react-redux';
/*To explicitly tell Firestore as to which component is active and which collection is being updated.
 This component is where the updated workflows in the Db should be displayed */
import {firestoreConnect} from 'react-redux-firebase';
//To use more than 1 higher order components and chain them together
import {compose} from 'redux';


class Dashboard extends Component{
    state={
        filtered:[]
    }

    handleChange=(e)=>{
        let currentList;
        let newList;
        console.log('Inside on trigger');
        if(e.target.value !== ''){
            currentList = this.props.workflows;
            newList= currentList.filter(workflow=>{
                const title = workflow.workflowTitle.toLowerCase();
                const filterText = e.target.value.toLowerCase();
                return title.includes(filterText);
            })
        }
        else {
            newList = this.props.workflows;
        }
        this.setState({
            filtered: newList
        })
    }

    render(){
        console.log(this.props);
        const {workflows, auth} = this.props;
        if(!auth.uid)//To redirect the user to login page if not logged in
            return <Redirect to='/signin'/>
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
                                    <input type="text" placeholder='Search Workflows' id='searchBar' onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="col s3">
                            <div className="row" id='filterbutton'>
                                <div className="input-field col s12">
                                    <label htmlFor='filterbutton'></label>
                                    <select className="btn white black-text" id="filterbutton">
                                        <option value='' disabled selected> Filter</option>
                                        <option value="1">ALL</option>
                                        <option value="2">COMPLETED</option>
                                        <option value="3">PENDING</option>
                                    </select>                                
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
                    <WorkflowList workflows={workflows}/>
                </div>
            </div>


            </div>
        )
    }

}

//This is done to reflect the state of the redux store on the UI rather than using hardcoded data
const mapStateToProps=(state)=>{
   console.log(state);
    return{
        workflows: state.firestore.ordered.workflows,/*state.workflow.workflows- this is the dummy data that was hardcoded. To display
        the data that is available in the DB, access the redux's state.firestore.ordered.workflows*/
        auth: state.firebase.auth
    }
}

export default compose(
connect(mapStateToProps),
firestoreConnect([
    {collection:'workflows',orderBy:['createdAt','asc']}
])
)(Dashboard);
