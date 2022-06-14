import axios from "axios";

const API_URL = "https://linkr-api-db.herokuapp.com";

const api = axios.create({
  baseURL: API_URL,
});

export default api;
