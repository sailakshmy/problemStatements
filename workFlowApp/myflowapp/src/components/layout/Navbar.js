import React  from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {Link} from 'react-router-dom';

const Navbar = () =>{
        
    return(
        <nav className="nav-wrapper pink darken-4">
            <div className="left">
                <Link to='/' className='brand-logo'>
                    <i className='fas fa-sitemap small prefix'></i>
                    FLOWAPP
                </Link>

            </div>
                <SignedInLinks/>
                <SignedOutLinks/>
        </nav>
        
    )
}


export default Navbar;