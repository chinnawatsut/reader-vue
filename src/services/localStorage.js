const authKey = "token"

const getToken = () => localStorage.getItem(authKey)
const setToken = (token) => localStorage.setItem(authKey, token)
const removeToken = () => localStorage.removeItem(authKey)

export default {
  getToken,
  setToken,
  removeToken
}