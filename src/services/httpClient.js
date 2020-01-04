import axios from 'axios'

const httpClient = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  // headers: {
  //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJqb2huIiwiaWQiOiIyIn0sImlhdCI6MTU3ODExNjc5NywiZXhwIjoxNTc4MTIwMzk3fQ.QeULQvuv65rV_MCrrHPR1JKCHcxDVLilPpGJ-hOs82U'
  // }
});


export default httpClient