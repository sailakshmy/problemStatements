import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class SignUp extends Component {
    state={
        firstName:'',
        lastName:'',
        email:'',
        password:''

    }
    //To handle the submit of the form
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    //To handle any change in the input fields
    handleChange=(e)=>{
        //console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white" >
                    <h5>Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id='firstname'  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id='lastname'  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email'  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                       <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn blue">Sign Up</button>
                    </div>
                    <div>
                        <Link to='/signin' >Already have an account? Log In here</Link>
                    </div>

                </form>
            </div>
        )
    }

}



export default SignUp;