<template>
  <div class="container">
    <ul class="list-group list-wrapper">
      <li
        v-for="(review,index) in reviews"
        :key="index"
        :class="{ 'highlight': review.score > 6 }"
        class="list-group-item"
      >
        <router-link
          :to="{ name: 'showReview', params: { reviewId: review._id }}"
        >{{review.title}} - {{review.date | year}} ({{review.score}}/10)</router-link>
        <router-link :to="{ name: 'editReview', params: { reviewId: review._id }}">
          <button class="btn btn-info">Edit</button>
        </router-link>
      </li>
    </ul>
    <router-link to="/reviews/create">
      <button class="btn btn-primary mt-2">Write a review</button>
    </router-link>
  </div>
</template>

<script>
import ReviewAPI from "../services/reviews.api";
import { mapState } from 'vuex';

export default {
  name: "home",
  data() {
    return {
      reviews: [],
      numb: 0
    };
  },
  created() {
    this.fetchReviews();
  },
  mounted() {},
  methods: {
    fetchReviews() {
      ReviewAPI.getReviews().then(response => {
        this.reviews = response.data;
      });
    },
    addNumb() {
      this.$store.dispatch("sample/addNumber", this.numb)
    },
    // ...mapActions('sample', ['addNumber'])
  },
  computed: {
    allNumber() {
      return this.$store.state.sample.numbers;
    },
    greaterNumber() {
      return this.$store.getters["sample/greaterNumber"];
    },
    ...mapState('sample',['numbers'])
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
