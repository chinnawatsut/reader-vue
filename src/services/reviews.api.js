import httpClient from './httpClient'

const getReviews = () => httpClient.get('/reviews');
const getReivewByID = (id) => httpClient.get(`/reviews/${id}`)
const createReview = (review) => httpClient.post('/reviews', review);

export default {
  getReviews,
  createReview,
  getReivewByID,
}
