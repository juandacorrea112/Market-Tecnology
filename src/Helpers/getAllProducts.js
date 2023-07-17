import axios from "axios";

//============== U R L   T E M P O R A L E S ==============

const urlpageSearchtemporal = 'https://rickandmortyapi.com/api/character'
const urlhometemporal = 'https://rickandmortyapi.com/api/character/?page=2'



//============ A P I   D E L   B A C K E N D ==========================
export const getAllpost = () => {
    return axios.get('http://127.0.0.1:8000/post/api/version1/postv/')
}


//============ A P I   D E   P R U E B A   D E   R I C K   A N D   M O R T Y ==========================

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