import React from 'react';


const WorkflowSummary = ({workflow}) =>{
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <i className="material-icons right">delete</i>
                    <span></span>
                    <p className="card-title">{workflow.workflowTitle}</p>   
                </div>
                <div className="divider"></div>
                <div className="card-content input-field">
                    <i className="material-icons right grey circle done">done</i>
                </div>

            </div>
        </div>
    )

}


export default WorkflowSummary;