import React from 'react';
import { NavLink } from 'react-router-dom';
import '../TodoItem/style.css'


const Contact = () => {
  return(
      <ul className="right">
          <li><NavLink to='/'>Todos</NavLink></li>
          <li><NavLink to='/form'>Contact Us</NavLink></li>
          <li><NavLink to='/' className='btn btn-floating grey darken-1'>KD</NavLink></li>
      </ul>   
  )  
}

export default Contact