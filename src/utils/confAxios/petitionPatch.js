import axios from 'axios';

export const patch = ( url, data ) => {
    return axios.patch(url, data).then(response => response);
}