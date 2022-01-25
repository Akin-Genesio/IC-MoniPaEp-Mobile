import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.20.14.149:3333'
})

export default api