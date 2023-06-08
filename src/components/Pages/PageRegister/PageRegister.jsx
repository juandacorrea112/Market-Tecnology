import React from 'react'
import './PageRegister.css'

export const PageRegister = () => {
  return (
    <div className='ContRegister'>
        <div className="lentRegister"></div>



        <form className='formRegister'>
            <h2>New Account</h2>
            <div className='inputBox'>
                <input type="text" required/>
                <label>Username</label>
            </div>
            <div className='inputBox'>
                <input type="email" required/>
                <label>Email</label>
            </div>
            <div className="inputBox">
                <input type="password" required/>
                <label>Create Password</label>
            </div>
            <div className="inputBox">
                <input type="password" required/>
                <label>Confirm Password</label>
            </div>
            <div className="inputBox">
                <input type="sumbit" value="Create"/>
            </div>
            <p>Alreadey have account ? <a href="#">Login</a></p>
        </form>





        {/* <form className='FormRegister'>
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

        </form> */}

    </div>
  )
}
