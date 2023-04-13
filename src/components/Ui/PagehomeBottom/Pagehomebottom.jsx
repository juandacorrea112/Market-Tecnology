import React from 'react'
import './Pagehomebottom.css'
// import  logopc2do  from '../../../images/logopc2do.jpg'
// import cellProducto from '../../../images/productos/cellProducto.jpg'
// import pcProductoVenta from '../../../images/productos/pcProductoVenta.jpg'

export const Pagehomebottom = () => {
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
