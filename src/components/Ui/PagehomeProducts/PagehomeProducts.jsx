import React, { useEffect, useState } from 'react'
import { fetchData } from '../../../Helpers/getAllProducts'
import ScrollReveal from 'scrollreveal'
import pcMack from '../../../images/productos/pcMack.jpg'
import ctUppc from '../../../images/productos/ctUppc.jpg'
import pcProductoVenta from '../../../images/productos/pcProductoVenta.jpg'
import './PagehomeProducts.css'


export const PagehomeProducts = () => {

    const [character, setCharacter] = useState([])


    //====== EJECUCION DE HELPER PARA CONSUMO DE API =========

    useEffect(() => {
        //ejecutamos la funcion de scroll
        scrollFunction()

        //ejecutamos helper de metodo GET
        fetchData()
            .then(responseData => {
                setCharacter(responseData.results)
            })
            .catch(error => {
                console.log('Error: ', error);
            })
        console.log(character);
    }, [])



    //======= ScrollReval ==========

    function scrollFunction() {
        ScrollReveal({

            //   reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200

        });

        ScrollReveal().reveal('.heading', { origin: 'top' })
        ScrollReveal().reveal('.portfolio-box', { origin: 'bottom' })
    }


    return (
        <>
            {/* products section desing  */}
            <section className="portfolio" id='portfolio'>
                <h2 className='heading'>Latest <span>Project</span></h2>

                <div className="portfolio-container">

                    {character.map((dat) => (
                        <div className="portfolio-box">
                            <img src={dat.image} alt='...' />
                            <div className="portfolio-layer">
                                <h4>{dat.name}</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda non error, temporibus, ducimus consequuntur itaque laudantium nulla laborum, dicta laboriosam nesciunt ipsam magni voluptas.
                                    A voluptatum soluta dicta dolorem.</p>
                                <a href="#"><i class='bx bx-link-external'></i></a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}