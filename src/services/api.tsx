import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.20.20.97:3333'
})
export default api