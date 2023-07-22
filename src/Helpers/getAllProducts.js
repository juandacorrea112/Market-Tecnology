import axios, { Axios } from "axios";

//============== U R L   T E M P O R A L E S ==============

const urlpageSearchtemporal = 'https://rickandmortyapi.com/api/character'
const urlhometemporal = 'https://rickandmortyapi.com/api/character/?page=2'


//============== U R L   P E R M A N E N T E S   D E L   B A C K E N D ==============

const postApi = axios.create({
    baseURL:'http://127.0.0.1:8000/post/api/version1/postv/'
})

//============ A C C I O N E S   C O N   L A     A P I   D E L   B A C K E N D ==========================
// (get) optener los valores
export const getAllpost = () => {
    return postApi.get('/')
}

// (post) enviar los valores nuevos
export const createPost = (posst) => {
    return postApi.post('/', posst)
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