<template>
  <div>
    <div class="container">
      <form class="login-form" @submit.prevent="login">
        <base-input
          id="username"
          label="Username"
          v-model="username"
          type="text"
          placeholder="username"
        />
        <base-input
          id="password"
          label="Password"
          v-model="password"
          type="password"
          placeholder="****"
        />
        <p v-if="error">{{error}}</p>
        <button id="loginBtn" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import BaseComponent from "../components/base/BaseComponents";

export default {
  components: {
    ...BaseComponent
  },
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      const credential = {
        login: this.username,
        password: this.password
      };
      this.$store
        .dispatch("login", credential)
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          this.error = err.response.data;
        });
    }
  }
};
</script>

<style lang="css" scoped>
.login-form {
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
  margin-top: 200px;
}
</style>
