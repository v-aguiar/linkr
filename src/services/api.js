import axios from "axios";

// const API_URL = "https://linkr-api-db.herokuapp.com";
const API_URL = "http://localhost:5000";

const api = axios.create({
    baseURL: API_URL,
});

export default api;
