<template>
  <div class="container">
    <form class="form-wrapper" @submit.prevent="createBook">
      <base-input id="title" label="Title" type="text" v-model="title" @blur="$v.title.$touch()" />
      <template v-if="$v.title.$error">
        <p v-if="!$v.title.required" class="error">Title is required.</p>
        <p v-if="!$v.title.minLength" class="error">Minimum title lengt is 4</p>

      </template>

      <base-input
        id="context"
        label="Context"
        type="text"
        v-model="context"
        @blur="$v.context.$touch()"
      />
      <template v-if="$v.context.$error">
        <p v-if="!$v.context.required" class="error">Context is required.</p>
        <p v-if="!$v.context.minLength" class="error">Minimum title lengt is 10</p>
      </template>

      <base-input
        id="imgUrl"
        label="Image Url"
        type="text"
        v-model="imgUrl"
        @blur="$v.imgUrl.$touch()"
      />
      <template v-if="$v.imgUrl.$error">
        <p v-if="!$v.imgUrl.url" class="error">Url is invalid.</p>
        <p v-else class="error">Url is required.</p>
      </template>

      <base-input
        id="date"
        label="Read date"
        type="date"
        v-model="readDate"
        @blur="$v.readDate.$touch()"
      />
      <template v-if="$v.readDate.$error">
        <p v-if="!$v.readDate.required" class="error">Date is required.</p>
      </template>

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
import { required, minLength, between, url } from "vuelidate/lib/validators";

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
      readDate: null
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(4)
    },
    context: {
      required,
      minLength: minLength(10)
    },
    imgUrl: {
      required,
      url
    },
    score: {
      required,
      between: between(1, 10)
    },
    readDate: {
      required
    }
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        ReviewAPI.createReview(review)
          .then(() => {
            this.$router.push({ name: "home" });
          })
          .catch(() => {
          });
      }
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
.error {
  color: red;
}
</style>