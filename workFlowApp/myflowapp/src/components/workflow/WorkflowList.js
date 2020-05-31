import React from 'react';
import WorkflowSummary from './WorkflowSummary';
//To route the user to a particular workflow and its nodes on click of the workflow  
import {Link} from 'react-router-dom';


const WorkflowList = ({workflows}) =>{
    return(
        <div className="row">
            {workflows && workflows.map(
                workflow =>{
                    return(
                        <div className="col s4" key={workflow.id}>
                            <Link to={'/workflow/'+ workflow.id}>
                            <WorkflowSummary workflow={workflow} />
                            </Link>
                        </div>
                    )

            }
            )}
        </div>
        
    )
}

export default WorkflowList;