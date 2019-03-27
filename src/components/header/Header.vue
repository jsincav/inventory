<template>
  <div>
    <b-navbar toggleable="md" class="navbar-lingraphica">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <!-- <img src="./../../assets/fred.png" style="width: 30px; padding-bottom: 2px"> -->
        <strong>Inventory</strong>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item>
            <router-link :to="'./'" class="nav-link">Option 1</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link :to="'./'" class="nav-link">Option 2</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown no-caret right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <font-awesome-layers class="fa-2x lingraphica-persona">
                <font-awesome-icon icon="circle"/>
                <font-awesome-icon icon="user" style="color: white" transform="shrink-6"/>
              </font-awesome-layers>
            </template>
            <b-dropdown-header>email@example.com</b-dropdown-header>
            <b-dropdown-item>Account</b-dropdown-item>
            <b-dropdown-item>Help</b-dropdown-item>
            <b-dropdown-item>Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      email: ""
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style scoped lang="scss">
@import "lingraphica-sass";
</style>

