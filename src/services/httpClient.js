import axios from 'axios'

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

export default httpClient