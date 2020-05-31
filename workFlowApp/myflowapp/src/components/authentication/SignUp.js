import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';



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
        this.props.signUp(this.state);
    }
    //To handle any change in the input fields
    handleChange=(e)=>{
        //console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })

    }
    render(){
        const {auth,authError} = this.props;
        if(auth.uid)
            return <Redirect to='/'/>
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white" >
                    <h5>Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName'  onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName'  onChange={this.handleChange}/>
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
                        <div className="red-text center">
                            {authError ? <p>{authError}</p>: null}
                        </div>
                    </div>
                    <div>
                        <Link to='/signin' >Already have an account? Log In here</Link>
                    </div>

                </form>
            </div>
        )
    }

}

const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);