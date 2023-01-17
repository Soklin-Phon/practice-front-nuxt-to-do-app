import axios from "axios";

const Api = axios.create({
    baseURL: 'http://128.199.234.179:1010/'
});

export default Api;