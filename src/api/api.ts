import Axios from "axios";

const axios = Axios.create({
  baseURL: 'https://api.expressmei.com/',
});

export default axios;