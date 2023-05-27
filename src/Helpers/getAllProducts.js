import axios from "axios";

//============== U R L   T E M P O R A L E S ==============

const urlpageSearchtemporal = 'https://rickandmortyapi.com/api/character'
const urlhometemporal = 'https://rickandmortyapi.com/api/character/?page=2'

//==========================================================

//============ METODO GET ============
export const getAllProducts = () => {

    return axios.get(urlpageSearchtemporal)
        .then(response => response.data)
        .catch(error => {
            console.log('Error:', error);
        })

}

export const fetchData = () => {
    return axios.get(urlhometemporal)
    .then(response => response.data)
    .catch(error => {
        console.log('Error: ',error);
    })
}