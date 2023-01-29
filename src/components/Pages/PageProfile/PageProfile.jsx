import React from 'react'
import girlProfile from '../../../images/perfiles/girlProfile.jpg'
import './PageProfile.css'

export const PageProfile = () => {
  return (
    <>
      <section className='perfil-usuario'>
        <div className="contenedor-perfil">
          <div className="portada-perfil">
            <div className="avatar-perfil">
              <img src={girlProfile} alt="..." />
            </div>
            <div className="datos-perfil">
              <h4 className='titulo-usuario'>Nombre de usuario</h4>
              <p className='bio-usuario'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rerum?</p>
              <ul className='lista-perfil'>
                <li>35 Seguidores</li>
                <li>7 Seguidos</li>
                <li>32 Publicaciones</li>
              </ul>
            </div>
            <div className="opcciones-perfil">
              <button type=''>cambiar portada</button>
              <button type=''><span class="material-symbols-outlined"> settings </span></button>
            </div>
          </div>
        </div>
        <div className="menu-perfil">
          <ul>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Celulares</a></li>
            <li><a href="#">Computadores</a></li>
          </ul>
        </div>
        <div className="contPublicproducts">
          <div className="card">
            
          </div>
        </div>
      </section>
    </>
  )
}
