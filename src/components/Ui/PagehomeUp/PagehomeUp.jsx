import React, { useEffect, useState } from 'react'
import ScrollReveal from 'scrollreveal'
import iconTecnologyModifi from '../../../images/icons/iconTecnologyModifi.png'
import './PagehomeUp.css'

export const PagehomeUp = () => {

  //======= ScrollReval ==========
  useEffect(() => {

    ScrollReveal({
      
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
      
    });

    ScrollReveal().reveal('.home-content', {origin: 'top'})
    ScrollReveal().reveal('.home-content h1', {origin: 'left'})
    ScrollReveal().reveal('.home-content p', {origin: 'right'})
    ScrollReveal().reveal('.home-img', {origin: 'bottom'})
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

  // let header = document.querySelector('header')
  // header.classList.toggle('sticky', window.scrollY > 100)

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