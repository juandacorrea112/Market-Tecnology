import React from 'react'
import './PagehomeCen.css'
import pcProduct from '../../../images/pcProduct.jpg'

export const PagehomeCen = () => {
  return (
    <div className='PatherBackgImg'>
        <div className="lentDarkandCont">
            <div className="contTittleDestac">
                <h1 className='TittlePrinciple'>VENDEDORES MAS DESTACADOS</h1>
            </div>
            <div className="contCards">
              {/* <div className="card">
                <div className="imgBox">
                  <img src={pcProduct} alt="..." />
                </div>
                <div className="contentInfo">
                  <h2>Pc de escritorio</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quidem corporis 
                    commodi enim magni dolor tempora. Cupiditate totam, adipisci quod explicabo 
                    facere incidunt obcaecati impedit est molestiae laborum quasi? Totam!</p>
                </div>
              </div> */}
              <div className="box">
                <div className="content">
                  <img src={pcProduct} alt="" />
                </div>
              </div>

              <div className="box">
                <div className="content">
                  <img src={pcProduct} alt="" />
                </div>
              </div>

              <div className="box">
                <div className="content">
                  <img src={pcProduct} alt="" />
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}
