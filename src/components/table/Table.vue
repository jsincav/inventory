<template>
  <div>
    <button id="add-item-button" class="btn btn-success" @click="addItem">Add Item</button>
    <div id="table">
      <table-component
        :data="inventoryData"
        sort-by="id"
        sort-order="asc"
        table-class="table table-striped"
        thead-class="table-head"
        filter-input-class="form-control search-input"
      >
        <table-column show="id" label="id" data-type="numeric"></table-column>
        <table-column show="device_type" label="Device Type"></table-column>
        <table-column show="serial" label="Serial Number"></table-column>
        <table-column show="date" label="Date Added" data-type="date:DD/MM/YYYY"></table-column>
        <table-column :sortable="false" :filterable="false">
          <template slot-scope="item">
            <a href="#" @click="editItem(item)">Edit</a>
          </template>
        </table-column>
      </table-component>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: [],
  data() {
    return {};
  },
  computed: {
    ...mapState(["inventoryData", "websocket"])
  },
  created() {},
  methods: {
    ...mapMutations(["socketAddItem"]),
    addItem() {
      this.socketAddItem({
        device_type: `TouchTalk`,
        serial: `34525`,
        date: "12/25/2020"
      });
    },
    editItem(item) {
      console.log(item);
    }
  }
};
</script>
<style lang="scss">
@import "lingraphica-sass";

#table {
  margin-top: -38px;
}

#add-item-button {
  position: relative;
  z-index: 1;
}

*,
*:after,
*:before {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.table-component {
  display: flex;
  flex-direction: column;
}

.table-component__filter {
  align-self: flex-end;
}

.table-component__filter__field {
  padding: 0 1.25em 0 0.75em;
  height: 2.5em;
  border: solid 2px #e0e0e0;
  border-radius: 2em;
  font-size: inherit;
}

.table-component__filter__clear {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  color: $lingraphica-blue;
  font-weight: bold;
  cursor: pointer;
}

.table-component__filter__field:focus {
  outline: 0;
  border-color: $lingraphica-blue;
}

.table-component__table-wrapper {
  overflow-x: auto;
  margin: 1em 0;
  width: 100%;
  border: solid 1px #ddd;
  border-bottom: none;
}

.table-component__table {
  min-width: 100%;
  border-collapse: collapse;
  border-bottom: solid 1px #ddd;
  table-layout: fixed;
}

.table-component__table__caption {
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

.table-component__table th,
.table-component__table td {
  padding: 0.75em 1.25em;
  vertical-align: top;
  text-align: left;
}

.table-component__table th {
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 0.85em;
}

.table-component__message {
  color: $lingraphica-light-gray;
  font-style: italic;
}

.table-component__th--sort,
.table-component__th--sort-asc,
.table-component__th--sort-desc {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.table-component__th--sort-asc:after,
.table-component__th--sort-desc:after {
  position: absolute;
  left: 0.25em;
  display: inline-block;
  color: #bbb;
}

.table-component__th--sort-asc:after {
  content: "↑";
  color: $lingraphica-blue;
}

.table-component__th--sort-desc:after {
  content: "↓";
  color: $lingraphica-blue;
}
</style>
