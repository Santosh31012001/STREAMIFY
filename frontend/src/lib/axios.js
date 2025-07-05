import axios from 'axios';
const BASE_URL = "https://streamify-8.onrender.com/api";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // This allows cookies to be sent with requests
});