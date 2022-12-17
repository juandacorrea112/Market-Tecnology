import React from 'react'
import './PagehomeUp.css'

export const PagehomeUp = () => {
  return (
    <div className='ContPrinHomeUp'>
      <div className="contTittleP">
        <h2 className='TextAcompa'>Todo sobre la tecnologia</h2>
        <h1 className='TittlePrinciple'>Market Tecnology</h1>
        <h2 className='TextAcompa'>encuentra tu PC Celular o Consola ideal</h2>
      </div>
      <div className="contButtonsRs">
        
        <button className="BtnP SecondClasBtn">
          <span className="circleMovil" aria-hidden="true">
          <span className="icon arrow"></span>
          </span>
          <span className="buttotext">INICIAR SESION</span>
        </button>


        <button className="BtnP SecondClasBtn">
          <span className="circleMovil" aria-hidden="true">
          <span className="icon arrow"></span>
          </span>
          <span className="buttotext">REGISTRARSE</span>
        </button>

      </div>
    </div>
  )
}
