import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';


class NodeDetails extends Component{
    state={
        nodeTitle: '',
        nodeDetails:'',
        nodeStatus:''
    }
    handleSubmit=(e)=>{
        if(e.target.id !== 'pending' && e.target.id !=='inprogress' && e.target.id !=='complete'){
            this.setState({
                [e.target.id]:e.target.value
            })
        }
        else {
            this.setState({
                nodeStatus:e.target.id
            })
        }
        this.props.history.push('/');
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleIconClick=(e)=>{
        console.log('clicked the icon');
        console.log(e.target.className);
        if(e.target.id==='pending'){
            console.log('pending icon'); 
            e.target.className = "material-icons right blue circle done";
            console.log(e.target.className);
            e.target.id = 'inprogress';
            console.log(e.target.id);
        }else if(e.target.id==='inprogress'){
            console.log('inprogress icon'); 
            e.target.className = "material-icons right green circle done";
            console.log(e.target.className);
            e.target.id = 'complete';
            console.log(e.target.id);
        }else if(e.target.id==='complete'){
            console.log('complete icon'); 
            e.target.className = "material-icons right grey circle done";
            console.log(e.target.className);
            e.target.id = 'pending';
            console.log(e.target.id);
        }
        this.setState({
            nodeStatus:e.target.id
        })
    }
    render(){
        //const id = this.props.match.params.id;
        console.log(this.props);
        const {node} = this.props;
        if(node){
        return(
            <div>
                <div className="divider"></div>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5>Edit Node</h5>
                        <div className="card">
                        <div className="card-content input-field">
                        <i className="material-icons right grey circle done" id='pending' onClick={this.handleIconClick}>done</i>
                    </div>
                            <div className="divider"></div>
                            <div className="card-content container input-field" contentEditable='true'>
                                <input type="text" value={node.nodeTitle} onChange={this.handleChange}/> 
                            </div>
                            <div className="divider"></div>
                            <div className="card-content input-field">
                                <textarea  className="materialize-textarea" value={node.nodeDetails} onChange={this.handleChange}></textarea>
                            </div>
                            <div className="input-field">
                <button className="btn blue" onClick={this.handleSubmit}> Save</button>
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
       {collection:'nodes'}
    ])
) (NodeDetails);

