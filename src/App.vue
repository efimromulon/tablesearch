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
		<vue-scroll :ops="ops">
		<v-content >
			
				<v-container  fluid class="pa-5 v-custom__absolute xl">
					<v-card>
						
						<v-data-table
							:headers="headers"
							:items="tableData"
							:search="search"
							fixed-header
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
			</vue-scroll>
		<v-bottom-sheet inset  v-model="sett">
			<v-card tile>
				<v-list>
					<v-list-item>

						<v-avatar
							size="avatarSize"
							color="primary"
						>
							{{selectedItem.id}}
						</v-avatar>

						<v-list-item-content>
							<v-list-item-title>{{selectedItem.secondName}}</v-list-item-title>
							<v-list-item-subtitle>{{selectedItem.firstName}}</v-list-item-subtitle>
						</v-list-item-content>

						<v-spacer></v-spacer>
					</v-list-item>
				</v-list>
			</v-card>
		</v-bottom-sheet>
	</v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
	name: 'App',

	components: {
	},
	computed: {
		...mapState(["tableData"]),
		headers () {
			return [
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
	},
	data: () => ({
		ops: {
			vuescroll: {
				mode: 'native',
				sizeStratagy: 'percent', //'number' if parent not fixed height
				detectResize: false,
				wheelScrollDuration: 1,
				wheelDirectionReverse: false
			},
			scrollPanel: {
				initialScrollY: false,
				initialScrollX: false,
				scrollingX: true,
				scrollingY: true,
				speed: 1,
				easing: undefined,
					//easeInQuad
					//easeOutQuad
					//easeInOutQuad
					//easeInCubic
					//easeOutCubic
					//easeInOutCubic
					//easeInQuart
					//easeOutQuart
					//easeInOutQuart
					//easeInQuint
					//easeOutQuint
					//easeInOutQuint
				verticalNativeBarPos: 'right'
			},
			rail: {
				background: '#01a99a',
				opacity: 0,
				size: '6px',
				specifyBorderRadius: false,
				gutterOfEnds: null,
				gutterOfSide: '2px',
				keepShow: false
			},
			bar: {
				showDelay: 500,
				onlyShowBarOnScroll: true,
				keepShow: true,
				background: '#c1c1c1',
				opacity: 1,
				hoverStyle: false,
				specifyBorderRadius: false,
				minSize: 0,
				size: '6px',
				disable: false
			}
		},
		search: '',
		selectedItem: null,
		sett: false,
		search1: '',
		window: {width: 0, height: 0},
		desserts: [
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Ice cream sandwich',
				calories: 237,
				fat: 9.0,
				carbs: 37,
				protein: 4.3,
				iron: '1%',
			},
			{
				name: 'Eclair',
				calories: 262,
				fat: 16.0,
				carbs: 23,
				protein: 6.0,
				iron: '7%',
			},
			{
				name: 'Cupcake',
				calories: 305,
				fat: 3.7,
				carbs: 67,
				protein: 4.3,
				iron: '8%',
			},
			{
				name: 'Gingerbread',
				calories: 356,
				fat: 16.0,
				carbs: 49,
				protein: 3.9,
				iron: '16%',
			},
			{
				name: 'Jelly bean',
				calories: 375,
				fat: 0.0,
				carbs: 94,
				protein: 0.0,
				iron: '0%',
			},
			{
				name: 'Lollipop',
				calories: 392,
				fat: 0.2,
				carbs: 98,
				protein: 0,
				iron: '2%',
			},
			{
				name: 'Honeycomb',
				calories: 408,
				fat: 3.2,
				carbs: 87,
				protein: 6.5,
				iron: '45%',
			},
			{
				name: 'Donut',
				calories: 452,
				fat: 25.0,
				carbs: 51,
				protein: 4.9,
				iron: '22%',
			},
			{
				name: 'KitKat',
				calories: 518,
				fat: 26.0,
				carbs: 65,
				protein: 7,
				iron: '6%',
			},
		],
	}),
	created() {
		window.addEventListener('resize', this.handleResize)
		this.handleResize()
	},
	mounted(){
		this.getTableData()
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
			console.log('Item selected: ' + item.id)
			this.selectedItem = item
			this.sett = !this.sett
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