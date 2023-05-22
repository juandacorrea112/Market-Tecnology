import React, { useEffect, useState } from 'react'
import calularProducto from '../../../images/productos/calularProducto.jpg'
import ctUppc from '../../../images/productos/ctUppc.jpg'
import pcProductoVenta from '../../../images/productos/pcProductoVenta.jpg'
import cellProducto from '../../../images/productos/cellProducto.jpg'
import dobolWindow from '../../../images/productos/dobolWindow.jpg'
import pcMack from '../../../images/productos/pcMack.jpg'
import './PageSearch.css'
import { error } from 'jquery'

export const PageSearch = () => {

    const apipruebaTemporal = 'https://rickandmortyapi.com/api/character'

    useEffect(() => {
        fetch(apipruebaTemporal)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log('Error', error);
            })
    }, [])

    return (
        <div className='BigcontentSeacrh'>
            <div className="contComponentsS">
                <h1 className='tittle'>search for vendors or <span>products</span></h1>
                <div className="contBoxsearcher">

                    <div class="search-box">
                        <input className='searchProduct' type="text" placeholder='Seacrh...' />
                        <a href="##" class="material-symbols-outlined">
                            <svg xmlns="http://www.w3.org/2000/svg" class="input-icon" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>

                </div>
                <div className="BoxCards-P-and-S">
                    <div href="#" class="card">
                        <img src={calularProducto} alt="..." className='card__img' />
                        <span class="card__footer">
                            <span>Awesome speedy card</span>
                            <span>2 minutes!</span>
                        </span>
                        <span class="card__action">
                        <a href="#">
                                <span class="material-symbols-outlined">
                                    visibility
                                </span>
                            </a>
                        </span>
                    </div>

                    <div href="#" class="card">
                        <img src={ctUppc} alt="..." className='card__img' />
                        <span class="card__footer">
                            <span>Awesome speedy card</span>
                            <span>2 minutes!</span>
                        </span>
                        <span class="card__action">
                        <a href="#">
                                <span class="material-symbols-outlined">
                                    visibility
                                </span>
                            </a>
                        </span>
                    </div>

                    <div href="#" class="card">
                        <img src={pcProductoVenta} alt="..." className='card__img' />
                        <span class="card__footer">
                            <span>Awesome speedy card</span>
                            <span>2 minutes!</span>
                        </span>
                        <span class="card__action">
                            <a href="#">
                                <span class="material-symbols-outlined">
                                    visibility
                                </span>
                            </a>
                        </span>
                    </div>

                    <div href="#" class="card">
                        <img src={cellProducto} alt="..." className='card__img' />
                        <span class="card__footer">
                            <span>Awesome speedy card</span>
                            <span>2 minutes!</span>
                        </span>
                        <span class="card__action">
                            <a href="#">
                                <span class="material-symbols-outlined">
                                    visibility
                                </span>
                            </a>
                        </span>
                    </div>

                    <div href="#" class="card">
                        <img src={dobolWindow} alt="..." className='card__img' />
                        <span class="card__footer">
                            <span>Awesome speedy card</span>
                            <span>2 minutes!</span>
                        </span>
                        <span class="card__action">
                            <a href="#">
                                <span class="material-symbols-outlined">
                                    visibility
                                </span>
                            </a>
                        </span>
                    </div>

                    <div class="card">
                        <img src={pcMack} alt="..." className='card__img' />
                        <span class="card__footer">
                            <span>Awesome speedy card</span>
                            <span>2 minutes!</span>
                        </span>
                        <span class="card__action">
                            <a href="#">
                                <span class="material-symbols-outlined">
                                    visibility
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

