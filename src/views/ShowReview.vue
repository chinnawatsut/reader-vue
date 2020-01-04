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
import { fetchReviewMixin } from '../mixins/fetchReviewMixin'

export default {
  mixins: [fetchReviewMixin],
}
</script>

<style scoped>
.wrapper-view {
  margin-top: 20px;
}
</style>
