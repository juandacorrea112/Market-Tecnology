import React, {useEffect, useState} from 'react'
import ScrollReveal from 'scrollreveal'
import iconTecnologyWhite from '../../../images/icons/iconTecnologyWhite.png'
import './PagehomeCen.css'
import '../../../index.css'

export const PagehomeCen = () => {

  //======= ScrollReval ==========
  useEffect(() => {

    ScrollReveal({
      
      // reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
      
    });

    ScrollReveal().reveal('.about-img', {origin: 'left'})
    ScrollReveal().reveal('.about-content', {origin: 'right'})
  },[])

  return (
    <>
      {/* about section  desing */}
      <section className='about' id='about'>
        <div className="about-img">
          <img src={iconTecnologyWhite} alt={iconTecnologyWhite} />
        </div>

        <div className="about-content">
          <h2 className='heading'>About <span>Me</span></h2>
          <h3>Frontend Developer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nostrum
           sit ea placeat quam velit temporibus nam distinctio suscipit possimus delectus, 
           assumenda eligendi. Consequuntur dolore qui quia consequatur blanditiis incidunt? 
           Ipsum tenetur hic dolorum deleniti, cupiditate doloribus 
           delectus culpa cum, voluptatem, optio reprehenderit. Quos, iste quam.</p>
           <a href="#" className="btn">Read More</a>
        </div>
      </section>
    </>
  )
}
