<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex flex-row-reverse"> 
      <span class="profile">Hi! {{ profile.display }}</span>
    </nav>
  </div>
</template>

<script>
import eventBus from '../eventBus'
export default {
  data() {
    return {
      profile: {
        display: '',
      }
    }
  },
  mounted() {
    eventBus.$on('on-signed-in', this.onSignedIn)
  },
  methods: {
    onSignedIn(profile) {
      this.profile = profile
    }
  }
};
</script>

<style scoped> 
.profile {
  color: aliceblue;
}
</style>