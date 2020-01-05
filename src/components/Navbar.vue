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
import { mapState } from 'vuex'

export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
      location.reload();
    }
  },
  computed: {
    // profile() {
    //   return this.$store.state.profile
    // },
    // ...mapState({
    //   profile: state => state.profile,
    //   // profile: 'profile',
    // })
    ...mapState(['profile'])
  }
};
</script>

<style scoped>
.profile {
  color: aliceblue;
  margin-right: 20px;
}
</style>