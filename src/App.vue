<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "app",
  created() {
    this.connectWebsocket();
  },
  methods: {
    ...mapActions(["connectWebsocket"])
  }
};
</script>

<style lang="scss">
@import "lingraphica-sass";
</style>
