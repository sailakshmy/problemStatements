import React  from 'react';
import NodeSummary from './NodeSummary';



const NodeList = ({nodes}) => {
    return(
        <div className='row'>
            {nodes && nodes.map(
                node=>{
                    return(
                        <div className="col s4">
                            <NodeSummary node={node} key={node.id}/>
                         </div>
                    )

                }
            )}            
        </div>
    )
}


export default NodeList;