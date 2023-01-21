import React from 'react'
import './PageRegister.css'

export const PageRegister = () => {
  return (
    <div className='ContRegister'>
        <div className="lentRegister"></div>

        <form className='FormRegister'>
            <div className="contTittleRegister">
                <h2>REGISTRO</h2>
            </div>
            
            <div className="contDivsInputs">
                <div className="ContsNames">
                    <div className="inputBoxR">
                        <input className='EmailRe' type="text" required />
                        <span className='EmailR'>Nombres</span>
                    </div>

                    <div className="inputBoxR">
                        <input className='EmailRe' type="text" required />
                        <span className='EmailR'>apellidos</span>
                    </div>

                    <div className="inputBoxR">
                        <input className='EmailRe' type="email" required />
                        <span className='EmailR'>Correo</span>
                    </div>

                </div>

                <div className="ContPasswords">

                    <div className="inputBoxR">
                        <input className='EmailRe' type="password" required />
                        <span className='EmailR'>Contraseña</span>
                    </div>

                    <div className="inputBoxR">
                        <input className='EmailRe' type="password" required />
                        <span className='EmailR'>Confirmar Contraseña</span>
                    </div>

                    <div className="inputBoxR">
                        <input className='EmailRe' type="number" required />
                        <span className='EmailR'>Celular</span>
                    </div>

                </div>
            </div>

            <div className="contButtonR">
                <button type='sumbit' className='BtnRegister'>CONFIRMAR</button>
            </div>

        </form>

    </div>
  )
}
