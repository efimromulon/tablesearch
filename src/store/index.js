import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loading: true,
		tableData: [],
		tableHeaders: [
			{
				text: 'Id',
				align: 'start',
				sortable: false,
				value: 'id',
			},
			{
				text: 'Firstname',
				value: 'firstName',
			},
			{
				text: 'Secondname',
				value: 'secondName',
			}
		]
	},
	mutations: {
		SET_TABLE_DATA: (state, payload) => {
			let modifyedData = payload.map( i => {
				let a = i.name
				let b = a.split(" "),
					fn = b.shift(),
					ln = b.shift() || "";
				return {id: i.id, firstName: fn,  secondName: ln}
			})
			state.tableData = modifyedData
			state.loading = false
		},
	},
	actions: {
		getTableData: ({ commit }) => {
			axios
				.get('https://jsonplaceholder.typicode.com/users')
				.then(response => {commit("SET_TABLE_DATA", response.data)})
				.catch(error => {console.log(error)})
		}
	},
	modules: {
	}
})
