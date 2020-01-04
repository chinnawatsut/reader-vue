<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-end">
      <template v-if="profile">
        <span class="profile">Hi! {{ profile.display }}</span>
        <button @click="logout" class="btn btn-primary">Logout</button>
      </template>
      <template v-else>
        <button class="btn btn-primary">Register</button>
      </template>
    </nav>
  </div>
</template>

<script>
import eventBus from "../eventBus";
import localStorage from "../services/localStorage";
export default {
  data() {
    return {
      profile: null
    };
  },
  mounted() {
    eventBus.$on("on-signed-in", this.onSignedIn);
  },
  methods: {
    onSignedIn(profile) {
      this.profile = profile;
    },
    logout() {
      localStorage.removeToken();
      location.reload();
    }
  }
};
</script>

<style scoped>
.profile {
  color: aliceblue;
  margin-right: 20px;
}
</style>