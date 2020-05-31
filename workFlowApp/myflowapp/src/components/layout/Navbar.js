import React  from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar = (props) =>{
        const {auth,profile} = props;
        console.log(auth.uid);
        //To check if the user is signed in or not and then display only the corresponding links
        //To access the user details whenever needed
        const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
    return(
        <nav className="nav-wrapper pink darken-4">
            <div className="left">
                <Link to='/' className='brand-logo'>
                    <i className='fas fa-sitemap small prefix'></i>
                    FLOWAPP
                </Link>
            </div>
            {auth.isLoaded && links}
                
                
        </nav>
        
    )
}
const mapStateToProps=(state)=>{
    //console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);