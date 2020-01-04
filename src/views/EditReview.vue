<template>
  <div class="container">
    <form v-if="review" class="form-wrapper" @submit.prevent="createBook">
      <base-input id="title" label="Title" type="text" v-model="review.title" />
      <base-input id="context" label="Context" type="text" v-model="review.context" />
      <base-input id="imgUrl" label="Image Url" type="text" v-model="review.imgUrl" />
      <base-input id="date" label="Read date" type="date" v-model="review.date" />
      <base-select id="score" label="Score" v-model="review.score" :customOptions="true">
        <option v-for="(score,index) in 10" :value="score" :key="index">{{ score}}</option>
      </base-select>
      <button class="btn btn-primary" type="submit">edit</button>
    </form>
  </div>
</template>

<script>
import { fetchReviewMixin } from '../mixins/fetchReviewMixin'
import BaseComponents from "../components/base/BaseComponents";

export default {
  components: {
    ...BaseComponents
  },
  mixins: [fetchReviewMixin],
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