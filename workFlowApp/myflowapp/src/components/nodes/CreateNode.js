import React, {Component} from 'react';


class CreateNode extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();

    }
    render(){
        return(
                <div>
                    <div className="divider"></div>
                    <div className="container">
                        <form onSubmit={this.handleSubmit} className="white">
                            <h5>Create Node</h5>
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
                        </form>
                    </div>
                    <div className="divider"></div>
                </div>

        )
    }

}




export default CreateNode;
