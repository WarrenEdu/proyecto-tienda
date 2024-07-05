import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
        <h1 className='navBar__title'><Link to='/'>E-commers</Link></h1>
        <ul className='navBar__list'>
            <li className='navBar__item'><Link to='/login'>Login</Link></li>
            <li className='navBar__item'><Link to='/purchases'>Purchases</Link></li>
            <li className='navBar__item'><Link to='/cart'>Cart</Link></li>
        </ul>
    </div>
  )
}

export default NavBar;