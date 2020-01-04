import httpClient from './httpClient';

const login = (crendential) => httpClient.post("/auth/login", crendential)

export default {
  login,
}