import React from 'react'
import './PageLogin.css'

export const PageLogin = () => {
  return (
    <div className="ContLogin">
      <div className="lentLogin"></div>
      <form className='FormLogin'>
        <div className="contTittleLogin">
          <h2>Login</h2>
        </div>

        <div className="inputBox">
          <input type="email" required />
          <span>Correo</span>
        </div>
        
        <div className="inputBox">
          <input type="password" required />
          <span>Contraseña</span>
        </div>

        <button type='sumbit' className='BtnFLogin'>ENTRAR</button>

      </form>
    </div>
  )
}
