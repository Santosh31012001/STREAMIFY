import axios from 'axios';

export default  axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api",
    withCredentials: true, // This allows cookies to be sent with requests
});