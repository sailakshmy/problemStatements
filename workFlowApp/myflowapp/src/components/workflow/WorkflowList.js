import React from 'react';
import WorkflowSummary from './WorkflowSummary';


const WorkflowList = () =>{
    return(
        <div className="row">
            <div className="col s4">
                <WorkflowSummary/>
            </div>
            <div className="col s4">
                <WorkflowSummary/>
            </div>
            <div className="col s4">
                <WorkflowSummary/>
            </div>
        </div>
        
    )
}

export default WorkflowList;