import React from 'react'
import LogoFooter from '../../../images/icons/LogoFooter.jpg'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col" id='company'>
            <img className='imgFooter logo' src={LogoFooter} alt="" />
            <p>
              we are spacialized in desingnis, make your business a brand 
              try our premium servicies.
            </p>
            <div className="social">
              <a href="#"><i className='fab fa-facebook'></i></a>
              <a href="#"><i className='fab fa-instagram'></i></a>
              <a href="#"><i className='fab fa-youtube'></i></a>
              <a href="#"><i className='fab fa-twitter'></i></a>
              <a href="#"><i className='fab fa-linkedin'></i></a>
              <a href="#"><i className='fab fa-github'></i></a>
            </div>
          </div>

          <div className="col" id='services'>
            <h3>Servicios</h3>
            <div className="Links">
              <a href="#">Ilustration</a>
              <a href="#">Creatives</a>
              <a href="#">Poster Desing</a>
              <a href="#">Card Desing</a>
            </div>
          </div>

          <div className="col" id='useful-links'>
            <h3>Enlaces</h3>
            <div className="Links">
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Our Policy</a>
              <a href="#">Help</a>
            </div>
          </div>

          <div className="col" id='contact'>
            <h3>Contacto</h3>
            <div className="contact-details">
              <i className='fafa-location'></i>
              <p>FF-42 Procube Avanue, <br/> NY, COL</p>
            </div>
            <div className="contact-details">
              <i className='fafa-phone'></i>
              <p>Redes sociales establecidas</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form">
            <form action="">
              <input type="text" placeholder='Enviar email ...' />
              <button><i className='fa fa-paper-plane'></i></button>
            </form>
          </div>
        </div>

      </div>
    </footer>
  )
}
