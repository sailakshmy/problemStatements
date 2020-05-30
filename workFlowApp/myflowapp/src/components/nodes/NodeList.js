import React  from 'react';
import NodeSummary from './NodeSummary';



const NodeList = () => {
    return(
        <div className='row'>
            <div className="col s4">
                <NodeSummary/>
               
            </div>
            <div className="col s4">
                <NodeSummary/>               
            </div>
            
        </div>
    )
}


export default NodeList;