import httpClient from './httpClient';

const login = (crendential) => httpClient.post("/auth/login", crendential)
const getProfile = () => httpClient.get("/me")

export default {
  login,
  getProfile
}