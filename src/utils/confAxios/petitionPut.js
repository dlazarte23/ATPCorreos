import axios from "axios";

export const put = (url, params) => {
  return axios.put(url, params).then((response) => response);
};
