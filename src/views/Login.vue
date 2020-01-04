<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="form-group row">
        <label for="username">Username</label>
        <input class="form-control" id="username" v-model="username" type="text" />
      </div>
      <div class="form-group row">
        <label for="password">Password</label>
        <input class="form-control" id="password" v-model="password" type="password" />
      </div>
      <button class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import AuthAPI from "../services/auth.api";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      const credential = {
        login: this.username,
        password: this.password
      };
      AuthAPI.login(credential)
        .then(response => {
          localStorage.setItem("token", response.data.token)
          this.$router.push({ name: "home" })
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  }
};
</script>
