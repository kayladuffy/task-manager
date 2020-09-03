import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">React Task Manager</Link>
                <Contact />
            </div>
        </nav>   
    )  
  }
  
  export default Navbar