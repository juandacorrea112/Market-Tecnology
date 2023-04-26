import React from 'react'
import girlProfile from '../../../images/perfiles/girlProfile.jpg'
// import calularProducto from '../../../images/productos/calularProducto.jpg'
import './PageProfile.css'

export const PageProfile = () => {
  return (
    <>
    <div className="contCardprofile">
      <div class="wrapper">
        <div class="left">
          <img src={girlProfile} alt={girlProfile} width="100"/>
            <h4>Alex William</h4>
            <p>Vendendor</p>
        </div>
        <div class="right">
          <div class="info">
            <h3>Information</h3>
            <div class="info_data">
              <div class="data">
                <h4>Email</h4>
                <p>alex@gmail.com</p>
              </div>
              <div class="data">
                <h4>Phone</h4>
                <p>0001-213-998761</p>
              </div>
            </div>
          </div>

          <div class="projects">
            <h3>Projects</h3>
            <div class="projects_data">
              <div class="data">
                <h4>Recent</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="data">
                <h4>Most Viewed</h4>
                <p>dolor sit amet.</p>
              </div>
            </div>
          </div>

          <div class="social_media">
            <ul>
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
