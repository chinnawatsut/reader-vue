<template>
  <div class="container">
    <ul class="list-group list-wrapper">
      <li
        v-for="(review,index) in reviews"
        :key="index"
        :class="{ 'highlight': review.score > 6 }"
        class="list-group-item"
      >
        <router-link :to="{ name: 'showReview', params: { reviewId: review._id }}">{{review.title}} - {{review.date | year}} ({{review.score}}/10)</router-link>
      </li>
    </ul>
    <router-link to="/reviews/create">
      <button class="btn btn-primary mt-2">Write a review</button>
    </router-link>
  </div>
</template>

<script>
import ReviewAPI from "../services/reviews.api";
import AuthApi from "../services/auth.api";
import eventBus from "../eventBus";

export default {
  name: "home",
  data() {
    return {
      reviews: []
    };
  },
  created() {
    this.fetchReviews();
    this.getProfile();
  },
  mounted() {},
  methods: {
    fetchReviews() {
      ReviewAPI.getReviews().then(response => {
        this.reviews = response.data;
      });
    },
    getProfile() {
      AuthApi.getProfile()
        .then(({ data }) => {
          eventBus.$emit("on-signed-in", data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="css" scoped>
img {
  width: 50px;
  height: 50px;
}
.highlight {
  color: #41b883;
}
.list-wrapper {
  margin-top: 30px;
}
</style>
