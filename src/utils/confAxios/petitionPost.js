import axios from "axios";

export const post = ( url, params ) => {
    
    const headers = { Authorization: 'Bearer ' };

    return axios.post( url, params, { headers } ).then( (results) => results );

}