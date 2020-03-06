import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		tableData: []
	},
	mutations: {
		SET_TABLE_DATA: (state, payload) => {
		// {
		// 	id: 1,
		// 	name: "Leanne Graham",
		// 	username: "Bret",
		// 	email: "Sincere@april.biz",
		// 	address: {
		// 		street: "Kulas Light",
		// 		suite: "Apt. 556",
		// 		city: "Gwenborough",
		// 		zipcode: "92998-3874",
		// 		geo: {
		// 			lat: "-37.3159",
		// 			lng: "81.1496"
		// 		}
		// 	},
		// 	phone: "1-770-736-8031 x56442",
		// 	website: "hildegard.org",
		// 	company: {
		// 		name: "Romaguera-Crona",
		// 		catchPhrase: "Multi-layered client-server neural-net",
		// 		bs: "harness real-time e-markets"
		// 	}
		// }
			let modifyedData = payload.map( i => {
				let a = i.name
				let b = a.split(" "),
					fn = b.shift(),
					ln = b.shift() || "";
				return {id: i.id, firstName: fn,  secondName: ln}
			})
			state.tableData = modifyedData
		},
	},
	actions: {
		getTableData: async ({ commit }) => {
			const link = 'https://jsonplaceholder.typicode.com/users';
			const tableData = await axios.get(link, {
				withCredentials: true,
				headers: {
					"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
				}
			})
			if (tableData && tableData.data) {
				const dataToStore = tableData.data
				commit("SET_TABLE_DATA", dataToStore)
			}
		},
	},
	modules: {
	}
})
