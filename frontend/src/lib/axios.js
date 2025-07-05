import axios from 'axios';
// Use environment variable for API base URL, fallback to Render URL
const BASE_URL = import.meta.env.VITE_API_URL || "https://streamify-8.onrender.com/api";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true, // This allows cookies to be sent with requests
});