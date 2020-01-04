<template>
  <div class="container">
    <form class="form-wrapper" @submit.prevent="createBook">
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
  components: {
    ...BaseComponents
  },
  data() {
    return {
      title: "",
      context: "",
      imgUrl: "",
      score: 10,
      highCount: 0,
      readDate: null
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

      ReviewAPI.createReview(review)
        .then(() => {
          this.$router.push({ name: "home" })
        })
        .catch(e => {
          console.log(e.response);
        });
    }
  }
};
</script>

<style scoped>
.form-wrapper {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  margin: auto;
  margin-top: 20px;
}
</style>