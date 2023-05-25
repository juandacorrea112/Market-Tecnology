import axios from "axios";

const URL = 'https://rickandmortyapi.com/api/character'

export const getAllProducts = async () => {
    try {
        const response = await axios(URL)
        
        return response;
    } catch(error) {
        console.log(error);;
    }
}