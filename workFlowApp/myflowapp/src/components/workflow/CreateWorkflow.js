import React, {Component} from 'react';


class CreateWorkflow extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();

    }
    render(){
        return(
                <div>
                    <div className="divider"></div>
                    <div className="container">
                        <form onSubmit={this.handleSubmit} className="white">
                            <h5>Create Workflow</h5>
                            <div className="input-field">
                                <input type="text" placeholder='Workflow Number'/>
                            </div>
                         </form>
                    </div>
                    <div className="divider"></div>
                </div>

        )
    }

}




export default CreateWorkflow;
