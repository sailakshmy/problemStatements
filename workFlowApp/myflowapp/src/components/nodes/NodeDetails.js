import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';


class NodeDetails extends Component{
    render(){
        const id = this.props.match.params.id;
        console.log(this.props);
        const {node} = this.props;
        if(node){
        return(
            <div>
                <div className="divider"></div>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5>Create Node</h5>
                        <div className="card">
                            <div className="divider"></div>
                            <div className="card-content container input-field">
                                <input type="text" value={node.nodeTitle}/> 
                            </div>
                            <div className="divider"></div>
                            <div className="card-content input-field">
                                <textarea  className="materialize-textarea" value={node.nodeDetails}></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="divider"></div>
            </div>

        )
        }
        else{
            return(
                <div className="container center">Loading Node.......</div>
            )
        }
    }
}
const mapStateToProps=(state, ownProps)=>{
    const id = ownProps.match.params.id;
    const nodes = state.firestore.data.nodes;
    const node = nodes ? nodes[id]:null;
    return{
        node:node
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
       // {collection:'nodes'}
    ])
) (NodeDetails);

