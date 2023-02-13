import React from 'react'
import { Link } from 'react-router-dom'
import ComputadoraVideo from '../../../images/video/ComputadoraVideo.mp4'
import './PagehomeUp.css'

export const PagehomeUp = () => {
  return (
    <>
      <main id='hero'>
        <div className='ContPrinHomeUp'>
          <div className="contTittleP">
            <h2 className='TextAcompa'>Todo sobre la tecnologia</h2>
            <h1 className='TittlePrinciple'>Market Tecnology</h1>
            <h2 className='TextAcompa'>encuentra tu PC Celular o Consola ideal</h2>
          </div>
          <div className="contButtonsRs">
            
            <Link to='/Login'>
              <button className="BtnP SecondClasBtn">
                <span className="circleMovil" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="buttotext">INICIAR SESION</span>
              </button>
            </Link>
              
            <Link to='/Registro'>
              <button className="BtnP SecondClasBtn">
                <span className="circleMovil" aria-hidden="true">
                <span className="icon arrow"></span>
                </span>
                <span className="buttotext">REGISTRARSE</span>
              </button>
            </Link>
            
            <button className="BtnP SecondClasBtn">
              <span className="circleMovil" aria-hidden="true">
              <span className="icon arrow"></span>
              </span>
              <span className="buttotext">DESTACADOS</span>
            </button>

          </div>
        </div>
        <video muted autoPlay loop >
          <source src={ComputadoraVideo} type='video/mp4'/>
        </video>
        <div className="capa">
          
        </div>
      </main>
    </>
  )
}



{/* <div className="contButtonsRs">
        
        <Link to='/Login'>
          <button className="BtnP SecondClasBtn">
            <span className="circleMovil" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="buttotext">INICIAR SESION</span>
          </button>
        </Link>
          
        <Link to='/Registro'>
          <button className="BtnP SecondClasBtn">
            <span className="circleMovil" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="buttotext">REGISTRARSE</span>
          </button>
        </Link>
        
        <button className="BtnP SecondClasBtn">
          <span className="circleMovil" aria-hidden="true">
          <span className="icon arrow"></span>
          </span>
          <span className="buttotext">DESTACADOS</span>
        </button> */}