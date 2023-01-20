import React from 'react'
import './Pagehomebottom.css'
import  logopc2do  from '../../../images/logopc2do.jpg'
import cellProducto from '../../../images/productos/cellProducto.jpg'
import pcProductoVenta from '../../../images/productos/pcProductoVenta.jpg'

export const Pagehomebottom = () => {
  return (
    <div className='contServicios'>
        <div className="contTittleS">
          <p>PRODUCTOS EN VENTA</p>
        </div>
        <div className="contCardsS">
          <div className="card">
            <div className="face front">
              <img src={cellProducto} alt="..." />
              <h3>Venta De Celular</h3>
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


          <div className="card">
            <div className="face front">
              <img src={logopc2do} alt="..." />
              <h3>Venta De Pc</h3>
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


          <div className="card">
            <div className="face front">
              <img src={pcProductoVenta} alt="..." />
              <h3>Venta De Pc</h3>
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
