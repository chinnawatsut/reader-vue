<template>
  <div class="container">
    <div v-if="review" class="wrapper-view">
      <h1>{{review.title}}</h1>
      <img :src="review.imgUrl" alt="" srcset="">
      <div>Score: {{review.score}}</div>
      <div>Read date: {{review.date}}</div>
      <p>{{review.context}}</p>
    </div>
  </div>
</template>

<script>
import ReviewsApi from '../services/reviews.api'

export default {
  props: ['reviewId'],
  data() {
    return {
      review: null,
    }
  },
  mounted() {
    this.fetchReview(this.reviewId)
  },
  methods: {
    fetchReview(id) {
      ReviewsApi.getReivewByID(id).then(response => {
        this.review = response.data
      })
    }
  }
}
</script>

<style scoped>
.wrapper-view {
  margin-top: 20px;
}
</style>
