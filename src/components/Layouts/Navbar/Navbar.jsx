import React, { useState } from 'react'
import girlProfile from '../../../images/perfiles/girlProfile.jpg'
import './Navbar.css'

export const Navbar = () => {

  const [sidebarNav, setSidebarnav] = useState("close")

  const OpenMenu = () => {
    setSidebarnav("showMenu")
  }
  const CloseMenu = () => {
    setSidebarnav("close")
  }

  return (
    <>
      <div className={`sidebar ${sidebarNav}`}>
        <div class="logo-details">
          {sidebarNav == "close" &&
            <i onClick={OpenMenu} className='bx bx-menu' style={{ cursor: "pointer" }} ></i>
          }

          {sidebarNav == "showMenu" &&
            <i onClick={CloseMenu} className='bx bx-menu' style={{ cursor: "pointer" }} ></i>
          }

          <span className="logo_name">Market Tecnology</span>
        </div>

        <ul class="nav-links">


          <li>
            <a id='simbolHome' href="/">
              <span class="material-symbols-outlined">cottage</span>
              <span class="link_name">Home</span>
            </a>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="/">Home</a></li>
            </ul>
          </li>


          <li>
            <a id='anclIcon' href="/Perfil">
              <span id='simbolPerfil' className="material-symbols-outlined">person</span>
              <span class="link_name">Profile</span>
            </a>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="#">Profile</a></li>
            </ul>
          </li>
          <li>
            <a href="/PageSearch">
              <i class='bx bx-grid-alt' ></i>
              <span class="link_name">Sellers</span>
            </a>
            <ul class="sub-menu blank">
              <li><a class="link_name" href="/PageSearch">Sellers</a></li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a id='productsIcon' href="/PageSearch">
                <span id='simbolProducts' class="material-symbols-outlined">computer</span>
                <span class="link_name">Products</span>
              </a>

            </div>
            <ul class="sub-menu">
              <li><a class="link_name" href="/PageSearch">Products</a></li>
              <li><a href="#">Computer</a></li>
              <li><a href="#">cell phones</a></li>
              <li><a href="#">Search</a></li>
            </ul>
          </li>
          <li>
            <div class="iocn-link">
              <a href="/Settings">
                <i class='bx bx-cog' ></i>
                <span class="link_name">Setting</span>
              </a>
            </div>
            <ul class="sub-menu">
              <a class="link_name" href="/Perfil">Setting</a>
              <li><a href="/Settings">Name</a></li>
              <li><a href="/Settings">Phone</a></li>
              <li><a href="/Settings">Profile picture</a></li>
              <li><a href="/Settings">Password</a></li>
              <li><a href="/Settings">Email</a></li>
            </ul>
          </li>

          <li>
            <div class="profile-details">
              <div class="profile-content">
                <img src={girlProfile} alt={girlProfile} />
              </div>
              <div class="name-job">
                <div className="profile_name">Name user</div>
                <div className="job">vendedor</div>
              </div>
              <i class='bx bx-log-out' ></i>
            </div>
          </li>
        </ul>
      </div>

    </>
  )
}
