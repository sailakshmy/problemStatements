import React from 'react';


const NodeSummary = () =>{
    return(
            <div className="card">
                <div className="divider"></div>
                    <div className="card-content container input-field">
                        <input type="text" placeholder='Node Number'/> 
                    </div>
                    <div className="divider"></div>
                    <div className="card-content input-field">
                        <textarea  className="materialize-textarea" placeholder='Node Details'></textarea>
                    </div>
            </div>
    )
}


export default NodeSummary;