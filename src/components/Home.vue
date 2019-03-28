<template>
  <div class="home">
    <app-header></app-header>
    <app-table></app-table>
  </div>
</template>

<script>
import table from "@/components/table/Table";
import { mapState } from "vuex";
export default {
  name: "home",
  components: {
    appTable: table
  },
  computed: {
    ...mapState(["websocket"])
  }
};
</script>

<style lang="scss">
@import "lingraphica-sass";
</style>
