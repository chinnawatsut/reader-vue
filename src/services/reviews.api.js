import httpClient from './httpClient'

const getReviews = () => httpClient.get('/reviews');
const createReview = (review) => httpClient.post('/reviews', review);

export default {
  getReviews,
  createReview
}
