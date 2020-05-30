import React from 'react';


const NodeSummary = ({node}) =>{
    return(
            <div className="card">
                <div className="divider"></div>
                    <div className="card-content container">
                        <p className="card-title">{node.nodeNumber}</p>
                    </div>
                    <div className="divider"></div>
                    <div className="card-content input-field">
                        <p className="card-content">{node.nodeDetails}</p>
                    </div>
            </div>
    )
}


export default NodeSummary;