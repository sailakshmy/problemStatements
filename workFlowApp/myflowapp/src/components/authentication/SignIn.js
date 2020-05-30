import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class SignIn extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    render(){
        return(
            <div className="container card-panel center">
                <form onSubmit={this.handleSubmit} className="white" >
                    <h5>Login</h5>
                    <div className="input-field">
                        <label htmlFor="email"></label>
                        <i className="material-icons prefix">email</i>
                        <input type="email" id='email' placeholder='Email'/>
                    </div>
                    <div className="input-field">
                    <label htmlFor="password"></label>
                        <i className="material-icons prefix">star</i>
                        <input type="password" id='password' placeholder='Password'/>
                    </div>
                    <div className="input-field">
                        <label htmlFor='rememberMe'>
                            <input type='checkbox' id='rememberMe'/>
                            <span>Remember Me</span>                            
                        </label>                     
                    </div>
                    <div className="input-field">
                        <button className="btn blue">Login</button>
                    </div>
                    <div>
                        <Link to='/signup' >Don't have an account? Sign Up here</Link>
                    </div>

                </form>
            </div>
        )
    }

}



export default SignIn;