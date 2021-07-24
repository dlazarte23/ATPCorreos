import axios from "axios";

export const post = ( url, params ) => {

    return axios.post( url, params ).then( response => response );

}