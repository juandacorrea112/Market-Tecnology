import React, {useEffect, useState} from 'react'
import ScrollReveal from 'scrollreveal'
import './Pagehomebottom.css'

export const Pagehomebottom = () => {

  //======= ScrollReval ==========
  useEffect(() => {

    ScrollReveal({
      
      // reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
      
    });

    ScrollReveal().reveal('.services-container', {origin: 'bottom'})
  },[])


  return (
    <>
      {/* services section */}
      <section className='services' id='services'>
        <h2 className='heading'>Our <span>Services</span></h2>

        <div className="services-container">
          <div className="services-box">
            <i class='bx bxs-phone'></i>
            <h3>Web Developer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, accusamus excepturi 
              labore aut molestias accusantium laboriosam. Necessitatibus fugit officia veniam?</p>
            <a href="#" className='btn'>Read More</a>
          </div>

          <div className="services-box">
          <i class='bx bx-share-alt' ></i>
            <h3>Web Graphic</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, accusamus excepturi 
              labore aut molestias accusantium laboriosam. Necessitatibus fugit officia veniam?</p>
            <a href="#" className='btn'>Read More</a>
          </div>

          <div className="services-box">
            <i class='bx bx-upvote'></i>
            <h3>Web Desing</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, accusamus excepturi 
              labore aut molestias accusantium laboriosam. Necessitatibus fugit officia veniam?</p>
            <a href="#" className='btn'>Read More</a>
          </div>
        </div>
      </section>
    </>
  )
}
