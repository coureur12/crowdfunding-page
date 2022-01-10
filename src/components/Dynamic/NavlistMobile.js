import classes from './NavlistMobile.module.css';
import React from 'react';

// This component contains the mobile navbar 

function NavlistMobile (){


    return(
        <div className={classes.mainContainer}>
                        <nav className={classes.navlist}>
                <ul>
                    <li>
                        <a href='' >About</a>
                    </li>
                    <li>
                        <a href=''>Discover</a>
                    </li>
                    <li>
                        <a href=''>Get Started</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavlistMobile;