import React from 'react';


const NodeSummary = ({node}) =>{
    return(
            <div className="card">
                <div className="divider"></div>
                    <div className="card-content container">
                        <p className="card-title">{node.title}</p>
                    </div>
                    <div className="divider"></div>
                    <div className="card-content input-field">
                        <p className="card-content">{node.content}</p>
                    </div>
            </div>
    )
}


export default NodeSummary;