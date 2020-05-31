import React, {Component} from 'react';
//To redirect the user to the dashboard if signed in
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';

class SignIn extends Component{
    state={
        email:'',
        password:''

    }
    //To handle the submit of the form
    handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state);
        this.props.signIn(this.state);
    }
    //To handle any change in the input fields
    handleChange=(e)=>{
        //console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    render(){
        const {authError,auth} = this.props;
        if(auth.uid)
            return <Redirect to='/'/>
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white" >
                    <h5>Login</h5>
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email'  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                    <i className="material-icons prefix">star</i>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor='rememberMe'>
                            <input type='checkbox' id='rememberMe'/>
                            <span>Remember Me</span>                            
                        </label>                     
                    </div>
                    <div className="input-field">
                        <button className="btn blue">Login</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p>: null}

                        </div>
                    </div>
                    <div>
                        <Link to='/signup' >Don't have an account? Sign Up here</Link>
                    </div>

                </form>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch)=>{
    return{
        signIn: (creds)=>dispatch(signIn(creds))
    }
}
const mapStateToProps = (state)=>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);