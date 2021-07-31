import axios from "axios";

export const get = ( url ) => {
    
    return axios.get( url ).then( response => response.data );

}

export const getEnriched = ( url, headers ) => {

    return axios.get( url, headers );
}