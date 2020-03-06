<template>
	<v-app light>
		<v-app-bar
			app
			color="white"
			fixed
			>
			<v-btn fab depressed color="transparent" href="https://github.com/efimromulon/tablesearch">
				<svg 
					role="img" 
					viewBox="0 0 24 24" 
					xmlns="http://www.w3.org/2000/svg"
					id="github_svg"
					>
					<title>GitHub icon</title>
					<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
				</svg>
			</v-btn>
			<v-toolbar-title class="mr-12 align-center">
				<span class="title">ERomulon</span>
			</v-toolbar-title>
			<v-spacer />
			<v-row
				align="center"
				style="max-width: 650px"
				>
				<v-text-field
					v-model="search"
					single-line
					prepend-icon="search"
					label="поиск"
					placeholder="Поиск по id, firstName, lastName"
					outlined
					hide-details
				></v-text-field>
			</v-row>
		</v-app-bar>
		<v-content >
			
				<v-container  fluid class="pa-5 v-custom__absolute xl">
					<v-card>
						
						<v-data-table
							:headers="tableHeaders"
							:items="tableData"
							:search="search"
							fixed-header
							v-if="!loading"
							disable-pagination 
							disable-sort 
							hide-default-footer
							:height="window.height - 96"
							>
							<template v-slot:body="{ items }">
								<tbody>
									<tr v-for="item in items" :key="item.name" @click="selectItem(item)" :class="{'selectedRow': item === selectedItem}">
										<td>{{ item.id }}</td>
										<td>{{ item.firstName }}</td>
										<td>{{ item.secondName }}</td>
									</tr>
								</tbody>
							</template>
						</v-data-table>
					</v-card>
				</v-container>

		</v-content>
		<div v-if="selectedItem">
		<v-bottom-sheet inset  v-model="selectedItem">
			<v-card tile>
				<v-list>
					<v-list-item>

						<v-avatar
							size="48"
							color="red"
						>
							{{selectedItem.id}}
						</v-avatar>

						<v-list-item-content class="ml-5">
							<v-list-item-title>{{selectedItem.secondName}}</v-list-item-title>
							<v-list-item-subtitle>{{selectedItem.firstName}}</v-list-item-subtitle>
						</v-list-item-content>

						<v-spacer></v-spacer>
					</v-list-item>
				</v-list>
			</v-card>
		</v-bottom-sheet>
		</div>
		<v-overlay :value="loading">
			<v-progress-circular
				:size="70"
				:width="7"
				color="black"
				indeterminate
			></v-progress-circular>
		</v-overlay>

	</v-app>
</template>

<script>
	import { mapState, mapActions } from 'vuex'

	export default {

		name: 'App',

		data: () => ({
			search: '',
			selectedItem: null,
			window: {width: 0, height: 0}
		}),

		computed: {
			...mapState({
				tableData: state => state.tableData ? state.tableData : [{id: 0, firstName: '1',  secondName: '2'}],
				tableHeaders: state => state.tableHeaders ? state.tableHeaders : [],
				loading: state => state.loading ? state.loading : false,
			})
		},

		created() {
			this.getTableData()
			window.addEventListener('resize', this.handleResize)
			this.handleResize()
		},

		destroyed() {
			window.removeEventListener('resize', this.handleResize)
		},

		methods: {
			...mapActions(["getTableData"]),
			handleResize() {
					this.window.width = window.innerWidth
					this.window.height = window.innerHeight
			},
			selectItem (item) {
				this.selectedItem = item
			}
		}

	}
</script>

<style lang="sass">
	html
		overflow: hidden !important

	@font-face
		font-family: 'Rajdhani-Bold'
		src: url('~@/assets/fonts/Rajdhani-Bold.ttf')
	@font-face
		font-family: 'Rajdhani-Medium'
		src: url('~@/assets/fonts/Rajdhani-Medium.ttf')

	.v-application
		font-family: 'Rajdhani-Medium' !important
		
	.v-application--is-ltr .v-data-table th
		font-family: 'Rajdhani-Bold' !important
		color: black !important

	.theme--light.v-application
		background-color: #F0F4F9 !important
		background: #F0F4F9 !important

	.title-custom
		font-family: 'Rajdhani-Bold' !important

	.v-custom__absolute
		position: relative
		top: 0
		left: 0
		z-index: 2
		height: calc(100vh - 60px)

	#github_svg
		height: 24px
</style>