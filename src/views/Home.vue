<template>
  <div class="home">
    <h1>Hello {{ name }}</h1>
    <input type="text" v-model="name" />
    <div>
      <img src="https://cdn.bitdegree.org/learn/pexels-photo-920220.jpeg?4d5e638c" :alt="name" />
    </div>
    <ul>
      <li v-for="(book,index) in books" :key="index">{{book.name}}</li>
    </ul>
    <button v-on:click="toggleShow"> show/hide </button>
    <div v-if="isShow">Hi vIf</div>
    <div v-show="isShow">Hi vShow</div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      name: "Smith",
      books: [
        { name: "Harry Potter", score: 7 },
        { name: "Percy", score: 9 },
        { name: "Titanic", score: 6 }
      ],
      isShow: false
    };
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow
    }
  }
};
</script>

<style lang="css" scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
