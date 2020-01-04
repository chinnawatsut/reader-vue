const authKey = "token"

const getToken = () => localStorage.getItem(authKey)
const setToken = (token) => localStorage.setItem(authKey, token)

export default {
  getToken,
  setToken
}