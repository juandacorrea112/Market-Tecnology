import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import './PageRegister.css'

export const PageRegister = () => {
    
    /*==================== cargar animacion de label ====================*/
    useEffect(() => {
        let label = document.querySelectorAll('#labelUp').forEach(label => {
            label.innerHTML = label.innerText.split('').map((letters, i) => `<span style="transition-delay: ${
                i * 50
            }ms">${letters}</span>`).join('')
        })
    },[])


  return (
    <div className='ContRegister'>
        <div className="lentRegister"></div>



        <form className='formRegister'>
            <h1>Register</h1>
            <div className='inputBox'>
                <input className='inputinterB' type="text" required/>
                <label id='labelUp'>Username</label>
            </div>
            <div className='inputBox'>
                <input className='inputinterB' type="email" required/>
                <label id='labelUp'>Email</label>
            </div>
            <div className="inputBox">
                <input className='inputinterB' type="password" required/>
                <label id='labelUp'>Create Password</label>
            </div>
            <div className="inputBox">
                <input id='inputinterB' className='inputinterB' type="password" required/>
                <label id='labelUp'>Confirm Password</label>
            </div>
            <div className="inputBox">

                <button className='inputinterB' type="sumbit">Create</button>
            </div>
            <p>Alreadey have account ? <a href="/Login">Login</a></p>
        </form>
    </div>
  )
}
