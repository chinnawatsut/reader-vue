<template>
  <div class="container">
    <button @click="fetchReviews">fetch reviews</button>
    <ul class="list-group">
      <li
        v-for="(review,index) in reviews"
        :key="index"
        :class="{ 'highlight': review.score > 6 }"
        class="list-group-item"
      >{{review.title}} ({{review.score}}/10)</li>
    </ul>
    <form class @submit.prevent="createBook">
      <div class="form-group row">
        <label for="title">Title</label>
        <input class="form-control" id="title" v-model="title" type="text" />
      </div>

      <div class="form-group row">
        <label for="context">Context</label>
        <input class="form-control" id="context" v-model="context" type="text" />
      </div>

      <div class="form-group row">
        <label for="imgUrl">Image url</label>
        <input class="form-control" id="imgUrl" v-model="imgUrl" type="text" />
      </div>

      <div class="form-group row">
        <label for="readDate">Read date</label>
        <input class="form-control" type="date" id="readDate" v-model="readDate">
      </div>

      <div class="form-group row">
        <label for="scoreSelection">Score</label>
        <select class="form-control" v-model="score" id="scoreSelection">
          <option v-for="(score,index) in 10" :value="score" :key="index">{{ score}}</option>
        </select>
      </div>
      <button class="btn btn-primary" type="submit">create</button>
    </form>
  </div>
</template>

<script>
import ReviewAPI from '../services/reviews.api'

export default {
  name: "home",
  components: {},
  data() {
    return {
      reviews: [],
      title: "",
      context: "",
      imgUrl: "",
      score: 10,
      highCount: 0,
      readDate: null,
    };
  },
  methods: {
    createBook() {
      const review = {
        title: this.title,
        context: this.context,
        imgUrl: this.imgUrl,
        score: this.score,
        date: this.readDate
      };

      ReviewAPI.createReview(review).then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e.response)
      })
      this.title = "";
      this.score = 10;
      this.imgUrl = "";
      this.readDate = null;
      this.context = "";
    },
    highScore() {
      console.log("method: highScore");
      return this.reviews.filter(b => b.score > 6).length;
    },
    fetchReviews() {
      ReviewAPI.getReviews().then(response => {
        this.reviews = response.data;
      });
    }
  },
  computed: {
    highScoreCount() {
      console.log("computed: highScoreCount");
      return this.reviews.filter(b => b.score > 6).length;
    }
  },
  watch: {
    reviews: {
      immediate: true,
      handler() {
        console.log("watch: reviews");
        this.highCount = this.reviews.filter(b => b.score > 6).length;
      }
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
</style>
