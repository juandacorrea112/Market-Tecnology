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

  /*=== toggle icon navbar ===*/
  
  const [changeic, setChangeic ] = useState(0)
  const [active, setActive ] = useState()

  const menuIcons =()=> {

    if (changeic == 0) {
      setChangeic(1)
      setActive()
    }
    else if (changeic == 1) {
      setChangeic(0)
      setActive('active')
    }

  }

  
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
      {/* header-design  */}

      <header className='header'>

        <a href="#" className='logo'>Market technology</a>

        {(changeic == 1) &&
          <i onClick={menuIcons} className='bx bx-menu' id='menu-icon' ></i>
        }

        {(changeic == 0) &&
          <i onClick={menuIcons} className='bx bx-x' id='menu-icon'></i>
        }

        <nav className={`navbar ${active}`}>
          <a href='#home' className='Active'>Home</a>
          <a href='#about'>sellers</a>
          <a href='#products'>products</a>
          <a href='/Perfil'>Profile</a>
        </nav>
        
      </header>

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