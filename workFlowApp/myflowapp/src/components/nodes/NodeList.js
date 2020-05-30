import React  from 'react';
import NodeSummary from './NodeSummary';
import {Link} from 'react-router-dom';



const NodeList = ({nodes}) => {
    return(
        <div className='row'>
            {nodes && nodes.map(
                node=>{
                    return(
                        <div className="col s4">
                            <Link to={'/node/'+node.id}>
                            <NodeSummary node={node} key={node.id}/>
                            </Link>
                         </div>
                    )

                }
            )}            
        </div>
    )
}


export default NodeList;