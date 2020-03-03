import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
	icons: {
		iconfont: 'md',
	},
	theme: {
		themes: {
			light: {
				primary: '#f0f4f9',
				secondary: '#b0bec5',
				accent: '#8c9eff',
				error: '#b71c1c',
				anchor: '#000000',
			}
		},
	}
})