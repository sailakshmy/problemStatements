import React from 'react';
import SignedInLinks from './SignedInLinks';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () =>{
    return(
        <ul className="right">
            <li><NavLink to='/signup' className='btn white black-text'>Sign up</NavLink></li>
            <li><NavLink to ='/signin' className='btn white black-text'>Log In</NavLink></li>
        </ul>
    )

}

export default SignedOutLinks;