import ReviewsApi from '../services/reviews.api'

export const fetchReviewMixin = {
  props: ['reviewId'],
  data() {
    return {
      review: null
    }
  },
  mounted() {
    this.fetchReview(this.reviewId)
  },
  methods: {
    fetchReview(id) {
      ReviewsApi.getReivewByID(id).then(response => {
        this.review = response.data
      });
    }
  }
}