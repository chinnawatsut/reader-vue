import axios from 'axios'

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});


httpClient.interceptors.request.use(configAuth)

function configAuth(config) {
  let token = localStorage.getItem("token")
  if (token) {
    config.headers['Authorization'] = "Bearer " + token
  }
  return config
}


export default httpClient