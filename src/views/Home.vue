<template>
  <div class="container">
    <h2>Total: {{ books.length }}</h2>
    <h2>HighScore: {{ highScoreCount }}</h2>
    <h2>HighCount: {{ highCount}}</h2>
    <h2>highScore: {{ highScore() }}</h2>

    <h3>LowScore: {{ books.length - highScoreCount }}</h3>
    <ul class="list-group">
      <li
        v-for="(book,index) in books"
        :key="index"
        :class="{ 'highlight': book.score > 6 }"
        class="list-group-item"
      >{{book.name}} ({{book.score}}/10)</li>
    </ul>
    <form class @submit.prevent="createBook">
      <div class="form-group row">
        <label for="name">Name</label>
        <input class="form-control" id="name" v-model="name" type="text" />
      </div>
      <div class="form-group row">
        <label for="score">Score</label>
        <select class="form-control" v-model="score" name="score" id="score">
          <option v-for="(score,index) in 10" :value="score" :key="index">{{ score}}</option>
        </select>
      </div>
      <button class="btn btn-primary" type="submit">create</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      books: [
        { name: "Harry Potter", score: 7 },
        { name: "Percy", score: 9 },
        { name: "Titanic", score: 6 }
      ],
      name: "",
      score: 10,
      highCount: 0
    };
  },
  methods: {
    createBook() {
      const book = {
        name: this.name,
        score: this.score
      };
      this.books.push(book);
      this.name = "";
      this.score = 10;
    },
    highScore() {
      console.log("method: highScore");
      return this.books.filter(b => b.score > 6).length;
    }
  },
  computed: {
    highScoreCount() {
      console.log("computed: highScoreCount");
      return this.books.filter(b => b.score > 6).length;
    }
  },
  watch: {
    books: {
      immediate: true,
      handler() {
        console.log("watch: books");
        this.highCount = this.books.filter(b => b.score > 6).length;
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
.name {
  color: brown;
}
.highlight {
  color: #41b883;
}
</style>
