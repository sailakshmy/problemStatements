import React from 'react';


const WorkflowSummary = ({workflow}) =>{
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <i className="material-icons right">delete</i>
                    <span></span>
                    <p className="card-title">{workflow.title}</p>
                    
                </div>

            </div>
        </div>
    )

}


export default WorkflowSummary;