import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		inventoryData: [
			{ id: '1', device: 'AllTalk', serial: '12345DUB', date: '07/07/2019' },
			{ id: '2', device: 'TouchTalk', serial: 'T34732', date: '09/20/2019' },
			{ id: '3', device: 'TouchTalk', serial: '96385DTB', date: '03/05/2018' },
			{ id: '4', device: 'MiniTalk', serial: '45744DTM', date: '12/15/2020' }
		]
	},
	mutations: {
		setInventoryData(state, data) {
			state.inventoryData = data;
		}
	},
	actions: {}
});
