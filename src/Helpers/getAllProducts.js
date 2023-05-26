import axios from "axios";

const URL = 'https://rickandmortyapi.com/api/character'

// export const getAllProducts = () => {
//     return fetch(URL)
//         .then(response => response.json())
//         .then(data => data)
//         .catch(error => {
//             console.log('Error:', error);
//         })
// }

//============ METODO GET ============
export const getAllProducts = () => {

    return axios.get(URL)
        .then(response => response.data)
        .catch(error => {
            console.log('Error:', error);
        })

}