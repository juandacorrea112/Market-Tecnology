import React from 'react'
import $ from 'jquery';

import girlProfile from '../../../images/perfiles/girlProfile.jpg'
// import calularProducto from '../../../images/productos/calularProducto.jpg'
import './PageProfile.css'

export const PageProfile = () => {
  return (
    <>
      <header className='headerProfileUser'>
        <div className="user">
          <img src={girlProfile} alt={girlProfile} />
          <h3 className='name'>Name user</h3>
          <p className='post'>vendedor de productos</p>
        </div>

        <nav className='navbar'>
          <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#home">about</a></li>
            <li><a href="#home">Portfolio</a></li>
            <li><a href="#home">Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
{/* <ul>
  <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
  <li><a href="#"><i class="fab fa-twitter"></i></a></li>
  <li><a href="#"><i class="fab fa-instagram"></i></a></li>
</ul> */}