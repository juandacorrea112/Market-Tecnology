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
    /*=============     API DE PRUEBA      ===================*/
    const apipruebaTemporal = 'https://rickandmortyapi.com/api/character'

    // optener el input para comprobar cuando esta vacio y cuando no
    const searchProduct = document.getElementById('searchProduct')

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
    },[])


    // Este useState lo uso para asignarle los valores pero filtrados por el nombre
    const [searchRick, setSearchRick] = useState(character)

    //funcion para filtrar los valores que coincidan con el valor del input
    const searchCharacter = (e) => {
        setLoadChatacter(1)
        const data = e.target.value
        const filter = character.filter(rick => rick.name.toLowerCase().includes(data))
        setSearchRick(filter)

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

                    {(loadChatacter == 0) &&
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
                </div>
            </div>
        </div>
    )
}

