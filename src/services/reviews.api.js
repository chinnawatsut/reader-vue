import httpClient from './httpClient'

const getReviews = () => httpClient.get('/reviews');

export default {
  getReviews,
}
