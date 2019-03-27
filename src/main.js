import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { TableComponent, TableColumn } from 'vue-table-component';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'lingraphica-sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faTrashAlt,
	faUserCircle,
	faSearch,
	faPlayCircle,
	faStopCircle,
	faPlus,
	faDownload,
	faInfoCircle,
	faCircle,
	faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import Header from './components/header/Header';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

library.add(
	faTrashAlt,
	faUserCircle,
	faSearch,
	faPlayCircle,
	faStopCircle,
	faPlus,
	faDownload,
	faInfoCircle,
	faCircle,
	faUser
);

Vue.component('table-component', TableComponent);
Vue.component('table-column', TableColumn);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);
Vue.component('app-header', Header);

new Vue({
	el: '#app',
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
