import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.20.14.62:3333'
})
export default api