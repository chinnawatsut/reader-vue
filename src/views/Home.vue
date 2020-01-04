<template>
  <div class="container">
    <ul class="list-group">
      <li
        v-for="(review,index) in reviews"
        :key="index"
        :class="{ 'highlight': review.score > 6 }"
        class="list-group-item"
      >{{review.title}} ({{review.score}}/10)</li>
    </ul>
    <form class @submit.prevent="createBook">
      <base-input id="title" label="Title" type="text" v-model="title" />
      <base-input id="context" label="Context" type="text" v-model="context" />
      <base-input id="imgUrl" label="Image Url" type="text" v-model="imgUrl" />
      <base-input id="date" label="Read date" type="date" v-model="readDate" />
      <base-select id="score" label="Score" v-model="score" :customOptions="true">
        <option v-for="(score,index) in 10" :value="score" :key="index">{{ score}}</option>
      </base-select>
      <button class="btn btn-primary" type="submit">create</button>
    </form>
  </div>
</template>

<script>
import ReviewAPI from "../services/reviews.api";
import BaseComponents from "../components/base/BaseComponents";
export default {
  name: "home",
  components: {
    ...BaseComponents
  },
  data() {
    return {
      reviews: [],
      title: "",
      context: "",
      imgUrl: "",
      score: 10,
      highCount: 0,
      readDate: null
    };
  },
  created() {
    this.fetchReviews();
  },
  mounted() {},
  methods: {
    createBook() {
      const review = {
        title: this.title,
        context: this.context,
        imgUrl: this.imgUrl,
        score: this.score,
        date: this.readDate
      };

      ReviewAPI.createReview(review)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e.response);
        });
      this.title = "";
      this.score = 10;
      this.imgUrl = "";
      this.readDate = null;
      this.context = "";
    },
    fetchReviews() {
      ReviewAPI.getReviews().then(response => {
        this.reviews = response.data;
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
</style>
