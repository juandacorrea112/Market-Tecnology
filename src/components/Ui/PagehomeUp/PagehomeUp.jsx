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

        <a href="#" className='logo'>Portafolio</a>

        <i class='bx bx-menu' id='menu-icon'></i>

        <nav className='navbar'>
          <a href='#' className='Active'>Home</a>
          <a href='#'>Vendedores</a>
          <a href='#'>Productos</a>
          <a href='#'>Perfil</a>
        </nav>
        
      </header>

      {/* home section desing */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Juan david</h1>
          <h3>And I'm a <span>Frontend Developer</span></h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
           Ab harum autem in qui illo magnam.</p>
           <div className="social-media">
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-instagram' ></i></a>
            <a href="#"><i class='bx bxl-github' ></i></a>
           </div>
           <a href="#" className='btn'>Download CV</a>
        </div>

        <div className="home-img">
          <img src={iconTecnologyModifi} alt="" />
        </div>
      </section>

    </>
  )
}