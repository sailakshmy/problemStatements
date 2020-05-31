import React from 'react';


const NodeSummary = ({node}) =>{
    let icons = <div className="card-content input-field">
    <i className="material-icons right grey circle done" id={node.nodeStatus}>done</i>
</div>
    if(node.nodeStatus==='pending'){
         icons = <div className="card-content input-field">
        <i className="material-icons right grey circle done" id={node.nodeStatus}>done</i>
    </div>
        }
    else if(node.nodeStatus==='inprogress'){
         icons = <div className="card-content input-field">
        <i className="material-icons right blue circle done" id={node.nodeStatus}>done</i>
    </div>
        }else if(node.nodeStatus==='complete'){
             icons = <div className="card-content input-field">
            <i className="material-icons right green circle done" id={node.nodeStatus}>done</i>
        </div>
            }

        return(
            <div className="card">
                <div className="divider"></div>
                     {icons}
                    <div className="card-content container">
                        <p className="card-title">{node.nodeTitle}</p>
                    </div>
                    <div className="divider"></div>
                    <div className="card-content input-field">
                        <p className="card-content">{node.nodeDetails}</p>
                    </div>                
            </div>
    )
}


export default NodeSummary;