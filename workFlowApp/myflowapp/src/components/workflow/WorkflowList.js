import React from 'react';
import WorkflowSummary from './WorkflowSummary';


const WorkflowList = ({workflows}) =>{
    return(
        <div className="row">
            {workflows && workflows.map(
                workflow =>{
                    return(
                        <div className="col s4">
                            <WorkflowSummary workflow={workflow} key={workflow.id}/>
                        </div>
                    )

            }
            )}
        </div>
        
    )
}

export default WorkflowList;