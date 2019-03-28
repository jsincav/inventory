import Vue from 'vue';
import Vuex from 'vuex';
import Sockette from 'sockette';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		inventoryData: [
			{ id: '1', device: 'AllTalk', serial: '12345DUB', date: '07/07/2019' },
			{ id: '2', device: 'TouchTalk', serial: 'T34732', date: '09/20/2019' },
			{ id: '3', device: 'TouchTalk', serial: '96385DTB', date: '03/05/2018' },
			{ id: '4', device: 'MiniTalk', serial: '45744DTM', date: '12/15/2020' }
		],
		websocket: null
	},
	mutations: {
		setInventoryData(state, data) {
			state.inventoryData = data;
		},
		setWebsocket(state, data) {
			state.websocket = data;
		}
	},
	actions: {
		connectWebsocket({ commit }) {
			let ws = new Sockette('wss://3aiz8pzc20.execute-api.us-east-1.amazonaws.com/dev/', {
				timeout: 5e3,
				maxAttempts: 1,
				onopen: (e) => {
					console.log('connected:', e);
					commit('setWebsocket', ws);
				},
				onmessage: (e) => {
					console.log('Message Received:', e);
				},
				onreconnect: (e) => console.log('Reconnecting...', e),
				onmaximum: (e) => console.log('Stop Attempting!', e),
				onclose: (e) => console.log('Closed!', e),
				onerror: (e) => console.log('Error:', e)
			});
		}
	}
});
