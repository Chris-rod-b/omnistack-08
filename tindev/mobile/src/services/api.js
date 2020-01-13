import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.10:3300' // é possivel utilizar ips de emuladores
});

export default api;