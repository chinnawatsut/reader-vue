<template>
  <div>
    <div class="container">
      <form class="login-form" @submit.prevent="login">
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
  </div>
</template>

<script>
import AuthAPI from "../services/auth.api";
import LocalStorage from "../services/localStorage";
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
          console.log(response);
          LocalStorage.setToken(response.data.token);
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          console.log(err.response.data);
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
  -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
  margin: auto;
  margin-top: 200px;
}
</style>
