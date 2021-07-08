import axios from "axios";

export const get = ( url ) => {

    const headers = { Authorization: 'Bearer ' }
    
    return axios.get( url, { headers } ).then( (results) => results );

}