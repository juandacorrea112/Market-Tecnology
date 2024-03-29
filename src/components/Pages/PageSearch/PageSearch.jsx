import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../../Helpers/getAllProducts'


import './PageSearch.css'


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

                    
                    {/* new card  */}

                    {(loadChatacter == 0) &&
                        character.map((data) => (

                            <article class="card">
                                <img
                                    class="card__background"
                                    src={data.image}
                                    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                    width="1920"
                                    height="2193"
                                />
                                <div class="card__content | flow">
                                    <div class="card__content--container | flow">
                                        <h2 class="card__title">{data.name}</h2>
                                        <p class="card__description">
                                            {data.species}
                                        </p>
                                    </div>
                                    <button class="card__button">View</button>
                                </div>
                            </article>
                        ))
                    }

                    {searchRick.map((dat) => (
                        <article class="card">
                            <img
                                class="card__background"
                                src={dat.image}
                                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                width="1920"
                                height="2193"
                            />
                            <div class="card__content | flow">
                                <div class="card__content--container | flow">
                                    <h2 class="card__title">{dat.name}</h2>
                                    <p class="card__description">
                                        {dat.species}
                                    </p>
                                </div>
                                <button class="card__button">View</button>
                            </div>
                        </article>
                    ))}

                    {searchProduct.map((dat) => (
                        <article class="card">
                            <img
                                class="card__background"
                                src={dat.image}
                                alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                                width="1920"
                                height="2193"
                            />
                            <div class="card__content | flow">
                                <div class="card__content--container | flow">
                                    <h2 class="card__title">{dat.name}</h2>
                                    <p class="card__description">
                                        {dat.species}
                                    </p>
                                </div>
                                <button class="card__button">View</button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

