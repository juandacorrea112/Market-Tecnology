import React, { useEffect } from 'react'
import './PageLogin.css'

export const PageLogin = () => {


  useEffect(() => {
    let label = document.querySelectorAll('#labelUpL').forEach(label => {
      label.innerHTML = label.innerText.split('').map((letters, i) => `<span style="transition-delay: ${i * 50
        }ms">${letters}</span>`).join('')
    })
  }, [])



  return (
    <div className='ContRegister'>
      <div className="lentRegister"></div>



      <form className='formLogin'>
        <h1>Login</h1>

        <div className='inputBoxL'>
          <input className='inputinterL' type="email" required />
          <label id='labelUpL'>Email</label>
        </div>

        <div className="inputBoxL">
          <input id='inputinterL' className='inputinterL' type="password" required />
          <label id='labelUpL'>Password</label>
        </div>
        <div className="inputBoxL">

          <button className='inputinterL' type="sumbit">Create</button>
        </div>
        <p>Alreadey have account ? <a href="/Login">Login</a></p>
      </form>
    </div>
  )
}
