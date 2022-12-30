import React from 'react';
import logo from './images/logo1.png';

function Navbar() {
    return (
        <div>
           <nav>
             <div to="main" className="logo">
                <img src={logo} alt="logo"/>
             </div>
             <input className="menu-btn" type='checkbox' id="menu-btn"/>
             <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
             </label>
             <ul className='menu'>
               <li to='#main'><a href='#mains' className='active'>Home</a></li>
               <li to='#features'><a href='#features'>Features</a></li>
               <li to='#services'><a href='#services'>Services</a></li>
               <li to='#contact'><a href='#Contact'>Contact</a></li>
             </ul>
           </nav>
    
        </div>
    )
}

export default Navbar;