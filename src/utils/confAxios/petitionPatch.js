import axios from 'axios';

export const patch = ( url, data ) => {
    console.log("ss", data)
    return axios.patch(url, data).then(response => response);
}