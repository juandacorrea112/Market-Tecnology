import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal'
import iconTecnologyModifi from '../../../images/icons/iconTecnologyModifi.png'
import './PagehomeUp.css'

export const PagehomeUp = () => {

  //======= ScrollReval ==========
  useEffect(() => {

    ScrollReveal({
      
      // reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
      
    });

    ScrollReveal().reveal('.home-content', {origin: 'top'})
    ScrollReveal().reveal('.home-content h1', {origin: 'left'})
    ScrollReveal().reveal('.home-content p', {origin: 'right'})
    ScrollReveal().reveal('.home-img', {origin: 'bottom'})
  },[])


  /* ========== Typed js ========== */
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: ['and selling website', 'Market', 'Tecnology'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    }

    const typed = new Typed(typedRef.current, options)

    return () => {

      // Limpiar la instancia de Typed.js al desmontar el componente
      typed.destroy()
    }
  },[])

  
  /* === ACTIVACION DE SCROLL PARA SECCIONES === */

  let sections = document.querySelectorAll('section')
  let navLinks = document.querySelectorAll('header nav a')

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY
      let offset = sec.offsetTop - 150
      let heigth = sec.offsetHeight
      let id = sec.getAttribute('id')

      if (top >= offset && top < offset + heigth) {
        navLinks.forEach(links => {
          links.classList.remove('active')
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
        })
      }
    })
  }

  return (
    <>

      {/* home section desing */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello and welcome</h3>
          <h1>to market technology</h1>
          {/* and selling website */}
          <h3>The best technology buying</h3>
          <h3>
            <span ref={typedRef}></span>
          </h3>
          <p>You can create your own profile and thus buy or sell 
            your products on our website very easily.</p>
           <div className="social-media">
            <a href="https://www.facebook.com/juandavid.corra.5/"><i class='bx bxl-facebook'></i></a>
            <a href="https://www.instagram.com/juandavidc02_bmx/?next=%2F"><i class='bx bxl-instagram' ></i></a>
            <a href="https://github.com/juandacorrea112"><i class='bx bxl-github' ></i></a>
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