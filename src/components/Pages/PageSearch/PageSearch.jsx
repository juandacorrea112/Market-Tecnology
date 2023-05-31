import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../../Helpers/getAllProducts'

// import calularProducto from '../../../images/productos/calularProducto.jpg'
// import ctUppc from '../../../images/productos/ctUppc.jpg'
// import pcProductoVenta from '../../../images/productos/pcProductoVenta.jpg'
// import cellProducto from '../../../images/productos/cellProducto.jpg'
// import dobolWindow from '../../../images/productos/dobolWindow.jpg'
// import pcMack from '../../../images/productos/pcMack.jpg'

import './PageSearch.css'
// import { error } from 'jquery'

export const PageSearch = () => {

    //aqui logro controlar el dom para que pinte las cards de los "productos"
    const [loadChatacter, setLoadChatacter] = useState()



    const [character, setCharacter] = useState([])


    useEffect(() => {
        setLoadChatacter(0)
        getAllProducts()
            .then(data => {
                setCharacter(data.results)
            })
            .catch(error => {
                console.log('Error:', error);
            })
    }, [])


    // Este useState lo uso para asignarle los valores pero filtrados por el nombre
    const [searchRick, setSearchRick] = useState(character)
    const [searchProduct, setSearchProduct] = useState(character)

    //funcion para filtrar los valores que coincidan con el valor del input
    const searchCharacter = (e) => {
        setLoadChatacter(1)
        const data = e.target.value
        const filter = character.filter(rick => rick.name.toLowerCase().includes(data))
        setSearchRick(filter)

        const dato = e.target.value
        const filtro = character.filter(prod => prod.species.toLowerCase().includes(dato))
        setSearchProduct(filtro)
    }



    return (
        <div className='BigcontentSeacrh'>
            <div className="contComponentsS">
                <h1 className='tittle'>search for vendors or <span>products</span></h1>
                <div className="contBoxsearcher">

                    <div class="search-box">
                        <input onChange={searchCharacter} id='searchProduct' className='searchProduct' type="text" placeholder='Seacrh...' />
                        <a href="#" class="material-symbols-outlined">
                            <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>

                </div>
                <div className="BoxCards-P-and-S">

                    {/* {(loadChatacter == 0) &&
                        character.map((dat) => (
                            <div key={dat.id} href="#" class="card">
                                <img src={dat.image} alt="..." className='card__img' />
                                <span class="card__footer">
                                    <span>{dat.name}</span>
                                    <span>{dat.species}</span>
                                </span>
                                <span class="card__action">
                                    <a href="#">
                                        <span class="material-symbols-outlined">
                                            visibility
                                        </span>
                                    </a>
                                </span>
                            </div>
                        ))
                    }

                    {searchRick.map((dat) => (
                        <div key={dat.id} href="#" class="card">
                            <img src={dat.image} alt="..." className='card__img' />
                            <span class="card__footer">
                                <span>{dat.name}</span>
                                <span>{dat.species}</span>
                            </span>
                            <span class="card__action">
                                <a href="#">
                                    <span class="material-symbols-outlined">
                                        visibility
                                    </span>
                                </a>
                            </span>
                        </div>
                    ))}

                    {searchProduct.map((dat) => (
                        <div key={dat.id} href="#" class="card">
                            <img src={dat.image} alt="..." className='card__img' />
                            <span class="card__footer">
                                <span>{dat.name}</span>
                                <span>{dat.species}</span>
                            </span>
                            <span class="card__action">
                                <a href="#">
                                    <span class="material-symbols-outlined">
                                        visibility
                                    </span>
                                </a>
                            </span>
                        </div>
                    ))} */}



                    {/* new card  */}

                    <article class="card">
                        <img
                            class="card__background"
                            src="https://i.imgur.com/QYWAcXk.jpeg"
                            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                            width="1920"
                            height="2193"
                        />
                        <div class="card__content | flow">
                            <div class="card__content--container | flow">
                                <h2 class="card__title">Colombia</h2>
                                <p class="card__description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum in
                                    labore laudantium deserunt fugiat numquam.
                                </p>
                            </div>
                            <button class="card__button">Read more</button>
                        </div>
                    </article>

                </div>
            </div>
        </div>
    )
}

