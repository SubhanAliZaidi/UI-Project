import React from 'react';
import logo from '../assets/logo.jpg';
import Search from './Search';
import payrentimg from '../assets/payrent.png' 
import mybookingimg from '../assets/myBooking.png' 
import hamburgericon from '../assets/hamburger-menu.png' 


export default function Navbar() {
  
  return (
    <>

      <navbar className='navbar'>

        <div className='logoside'>
          <img src={logo} alt="" width={'170px'} />

          <div>Rent <button><i class="fa-solid fa-angle-down"></i></button></div>

        </div>

        <div className="menuside">
          <button className='firstbtn'><img src={mybookingimg} alt="mybookings" />My Bookings</button>
          <button className='secondbtn'>
            <img src={payrentimg} alt="pay rent" /><span>Pay Rent</span></button>
          <button className='thirdbtn'>Post Your Property</button>
          <button className='fourthbtn'>Sign up</button>
          <button className='fifthbtn'>Log in</button>
          <button className='sixthbtn'><img src={hamburgericon} alt="menu" />Menu</button>
        </div>
      </navbar>
      <Search />
    </>
  )
}
