import React from 'react'
import $ from 'jquery';

import girlProfile from '../../../images/perfiles/girlProfile.jpg'
import calularProducto from '../../../images/productos/calularProducto.jpg'
import cellProducto from '../../../images/productos/cellProducto.jpg'
import ctUppc from '../../../images/productos/ctUppc.jpg'
import dobolWindow from '../../../images/productos/dobolWindow.jpg'
import pcMack from '../../../images/productos/pcMack.jpg'
import pcProductoVenta from '../../../images/productos/pcProductoVenta.jpg'
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
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
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

            <div className="counterprofileperson">
              <div className="boxprofileperson">
                <span>2+</span>
                <h3>years of experience</h3>
              </div>


              <div className="boxprofileperson">
                <span>100+</span>
                <h3>porject completed</h3>
              </div>


              <div className="boxprofileperson">
                <span>430+</span>
                <h3>happy clients</h3>
              </div>


              <div className="boxprofileperson">
                <span>12+</span>
                <h3>awards</h3>
              </div>
            </div>
          </div>
        </section>

        {/* portafolio section */}
        <section className='portafolio' id='portfolio'>
          <h1 className="heading"> My <span>portfolio</span></h1>

          <div className="box-container">
            <div className="boxprofileperson">
              <img src={calularProducto} alt={calularProducto} />
            </div>

            <div className="boxprofileperson">
              <img src={cellProducto} alt={cellProducto} />
            </div>

            <div className="boxprofileperson">
              <img src={ctUppc} alt={ctUppc} />
            </div>

            <div className="boxprofileperson">
              <img src={dobolWindow} alt={dobolWindow} />
            </div>

            <div className="boxprofileperson">
              <img src={pcMack} alt={pcMack} />
            </div>

            <div className="boxprofileperson">
              <img src={pcProductoVenta} alt={pcProductoVenta} />
            </div>
          </div>
        </section>

        {/* ------- contact ------- */}
        <section id='contact' className='contact'>
          <h1 className="heading"> My <span>contact</span></h1>

          <div className="rowProf">
            <div className="content">
              <h3 className='title'>contact info</h3>

              <div className="info">
                <h3> <i className='fas fa-envelope'></i> shaikh@gmail.com </h3>
                <h3> <i className='fas fa-phone'></i> +123-456-7890 </h3>
                <h3> <i className='fas fa-phone'></i> +111-222-3333 </h3>
                <h3> <i className='fas fa-map-marker-alt'></i> mumbai, india - 400104 </h3>
              </div>
            </div>

            <form action="">
              <input type="text" placeholder='name' required className='box'/>
              <input type="email" placeholder='email' required className='box'/>
              <input type="text" placeholder='project'required className='box'/>
              <textarea name="" id="" cols="30" rows="10" required className='box message' placeholder='message'></textarea>
              <button type='sumbit' className='btn'> send <i className='fas fa-paper-plane'></i></button>
            </form>
          </div>

        </section>
      </div>


    </div>
  )
}