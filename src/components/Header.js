import React from 'react';
import { Route, Link } from 'react-router-dom';

function Header() {
    return (
        <div className='headerDiv'>
            <Link to='/'>
                <p>home</p>
           </Link>
        </div>
    )
}

export default Header;