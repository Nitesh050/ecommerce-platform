import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000', // Your backend URL
    withCredentials: true
});

// Add request interceptor for authentication if needed
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const fetchProducts = () => API.get('/products');
export const getProduct = (id) => API.get(`/products/${id}`);
export const createOrder = (orderData) => API.post('/orders', orderData);
// Add more API endpoints as needed

export default API;
