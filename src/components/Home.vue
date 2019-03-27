<template>
  <div class="home">
    <app-header></app-header>
    <app-table></app-table>
  </div>
</template>

<script>
import table from "@/components/table/Table";
export default {
  name: "home",
  components: {
    appTable: table
  }
};
</script>

<style lang="scss">
@import "lingraphica-sass";
</style>
