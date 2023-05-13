import React from 'react'
import $ from 'jquery';

import girlProfile from '../../../images/perfiles/girlProfile.jpg'
// import calularProducto from '../../../images/productos/calularProducto.jpg'
import './PageProfile.css'

export const PageProfile = () => {


  return (
    <div className='body-profile'>
      <header className='headerProfileUser'>
        <div className="user">
          <img src={girlProfile} alt={girlProfile} />
          <h3 className='name'>Name user</h3>
          <p className='post'>vendedor de productos</p>
        </div>

        <nav className='navbar'>
          <ul>
            <li><a href="#home">home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#home">Portfolio</a></li>
            <li><a href="#home">Contact</a></li>
          </ul>
        </nav>
      </header>


      {/* <div id='menu' className="fas fa-bars"></div> */}

      <div className="infooptionsProfile">
        <section id='home' className='homeprofileperson'>
          <h3>Hi there !</h3>
          <h1>I'M <span>shaikh anas</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam suscipit doloremque, ad molestiae eius, debitis iste laboriosam commodi voluptatum laudantium minima repudiandae vitae architecto itaque voluptatibus saepe!</p>
          <a href="#about"><button className='btnprofileperson'>About me <i className="fas fa-user"></i></button></a>
        </section>
        {/* home section ends */}


        {/* about sections starts */}

        <section className="aboutProf" id='about'>
          <h1 className="heading"><span>About</span> me </h1>

          <div className="rowProf">
            <div className="infoProf">
              <h3><span> name : </span> shaikh anas</h3>
              <h3><span> age : </span> vendedor </h3>
              <h3><span> post : </span> shaikh anas</h3>
              <h3><span> calification : </span> very god </h3>
              <a href="#"><button className='btnprofileperson'>download CV <i className="fas fa-download"></i></button></a>
            </div>
          </div>
        </section>
      </div>


    </div>
  )
}