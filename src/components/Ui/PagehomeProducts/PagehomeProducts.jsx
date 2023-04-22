import React, {useEffect, useState} from 'react'
import ScrollReveal from 'scrollreveal'
import pcMack from '../../../images/productos/pcMack.jpg'
import ctUppc from '../../../images/productos/ctUppc.jpg'
import pcProductoVenta from '../../../images/productos/pcProductoVenta.jpg'
import './PagehomeProducts.css'


export const PagehomeProducts = () => {

    //======= ScrollReval ==========
  useEffect(() => {

    ScrollReveal({
      
    //   reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
      
    });

    ScrollReveal().reveal('.heading', {origin: 'top'})
    ScrollReveal().reveal('.portfolio-box', {origin: 'bottom'})
  },[])

    return (
        <>
            {/* products section desing  */}
            <section className="portfolio" id='portfolio'>
                <h2 className='heading'>Latest <span>Project</span></h2>

                <div className="portfolio-container">
                    <div className="portfolio-box">
                        <img src={pcProductoVenta} alt={pcProductoVenta} />
                        <div className="portfolio-layer">
                            <h4>Web Desing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda non error, temporibus, ducimus consequuntur itaque laudantium nulla laborum, dicta laboriosam nesciunt ipsam magni voluptas. 
                                A voluptatum soluta dicta dolorem.</p>
                            <a href="#"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={pcMack} alt={pcMack} />
                        <div className="portfolio-layer">
                            <h4>Web Desing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda non error, temporibus, ducimus consequuntur itaque laudantium nulla laborum, dicta laboriosam nesciunt ipsam magni voluptas. 
                                A voluptatum soluta dicta dolorem.</p>
                            <a href="#"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={ctUppc} alt={ctUppc} />
                        <div className="portfolio-layer">
                            <h4>Web Desing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda non error, temporibus, ducimus consequuntur itaque laudantium nulla laborum, dicta laboriosam nesciunt ipsam magni voluptas. 
                                A voluptatum soluta dicta dolorem.</p>
                            <a href="#"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={pcProductoVenta} alt={pcProductoVenta} />
                        <div className="portfolio-layer">
                            <h4>Web Desing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda non error, temporibus, ducimus consequuntur itaque laudantium nulla laborum, dicta laboriosam nesciunt ipsam magni voluptas. 
                                A voluptatum soluta dicta dolorem.</p>
                            <a href="#"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={pcMack} alt={pcMack} />
                        <div className="portfolio-layer">
                            <h4>Web Desing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda non error, temporibus, ducimus consequuntur itaque laudantium nulla laborum, dicta laboriosam nesciunt ipsam magni voluptas. 
                                A voluptatum soluta dicta dolorem.</p>
                            <a href="#"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={ctUppc} alt={ctUppc} />
                        <div className="portfolio-layer">
                            <h4>Web Desing</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda non error, temporibus, ducimus consequuntur itaque laudantium nulla laborum, dicta laboriosam nesciunt ipsam magni voluptas. 
                                A voluptatum soluta dicta dolorem.</p>
                            <a href="#"><i class='bx bx-link-external'></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}