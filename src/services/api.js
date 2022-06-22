import axios from "axios";

const API_URL = "http://localhost:5000"; //https://linkr-api-db.herokuapp.com

const api = axios.create({
  baseURL: API_URL,
});

export default api;
