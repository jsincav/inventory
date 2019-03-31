import Vue from 'vue';
import Vuex from 'vuex';
import Sockette from 'sockette';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		inventoryData: [],
		websocket: null
	},
	mutations: {
		setInventoryData(state, data) {
			state.inventoryData = data;
		},
		pushInventoryItem(state, item) {
			state.inventoryData.push(item);
		},
		socketAddItem(state, item) {
			state.websocket.json({
				action: 'addItem',
				data: item
			});
		},
		setWebsocket(state, data) {
			state.websocket = data;
		},
		getInventory(state) {
			state.websocket.json({
				action: 'getInventory'
			});
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
					commit('getInventory');
				},
				onmessage: (e) => {
					console.log('Message Received:', e);
					var data = JSON.parse(e.data);
					console.log(JSON.parse(data.data));
					var action = data.action;
					var returnedData = JSON.parse(data.data);

					if (action === 'getInventory') {
						commit('setInventoryData', returnedData);
					}
					if (action === 'addItem') {
						commit('pushInventoryItem', returnedData);
					}
				},
				onreconnect: (e) => console.log('Reconnecting...', e),
				onmaximum: (e) => console.log('Stop Attempting!', e),
				onclose: (e) => console.log('Closed!', e),
				onerror: (e) => console.log('Error:', e)
			});
		}
	}
});
