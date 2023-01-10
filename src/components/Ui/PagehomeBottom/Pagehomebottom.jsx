import React from 'react'
import './Pagehomebottom.css'
import  logopc2do  from '../../../images/logopc2do.jpg'

export const Pagehomebottom = () => {
  return (
    <div className='contServicios'>
        <div className="contTittleS">
          <h1>PRODUCTOS EN VENTA</h1>
        </div>
        <div className="contCardsS">
          <div className="card">
            <div className="face front">
              <img src={logopc2do} alt="..." />
              <h3>venta de pc</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rem commodi beatae quidem reprehenderit nostrum 
                doloremque officiis sapiente
                nam cumque dolorum, in nesciunt totam consectetur at quia 
                iure quos!</p>
                <div className="link">
                  <a href="#">Details</a>
                </div>
            </div>
            <div className="face back">
            <h3>venta de pc</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rem commodi beatae quidem reprehenderit nostrum 
                doloremque officiis sapiente
                nam cumque dolorum, in nesciunt totam consectetur at quia 
                iure quos!</p>
              <div className="link">
                <a href="#">Details</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
