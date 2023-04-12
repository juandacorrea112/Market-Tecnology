import React from 'react'
import iconTecnologyModifi from '../../../images/icons/iconTecnologyModifi.png'
import { Link } from 'react-router-dom'
// import ComputadoraVideo from '../../../images/video/ComputadoraVideo.mp4'
import './PagehomeUp.css'

export const PagehomeUp = () => {
  return (
    <>
      {/* header-design  */}

      <header className='header'>

        <a href="#" className='logo'>Market technology</a>

        <i class='bx bx-menu' id='menu-icon'></i>

        <nav className='navbar'>
          <a href='#home' className='Active'>Home</a>
          <a href='#about'>sellers</a>
          <a href='#products'>products</a>
          <a href='#profile'>Profile</a>
        </nav>
        
      </header>

      {/* home section desing */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello and welcome</h3>
          <h1>to market technology</h1>
          <h3>The best technology buying <span>and selling website</span></h3>
          <p>You can create your own profile and thus buy or sell 
            your products on our website very easily.</p>
           <div className="social-media">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-instagram' ></i></a>
            <a href="#"><i class='bx bxl-github' ></i></a>
           </div>
           <a href="#" className='btn'>Register</a>
        </div>

        <div className="home-img">
          <img src={iconTecnologyModifi} alt="" />
        </div>
      </section>
    </>
  )
}