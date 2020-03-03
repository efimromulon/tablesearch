<template>
	<v-app light>
		<v-app-bar
			app
			color="white"
		>
			<v-btn tile fab elevation="1" small color="purple"><v-icon color="white">view_day</v-icon></v-btn>
			<v-toolbar-title class="ml-2 font-weight-black title-custom">ERomulon.</v-toolbar-title>
			<v-spacer/>
			<v-btn depressed fab small color="white"><v-icon color="black">format_align_justify</v-icon></v-btn>
			<v-btn depressed fab small color="white"><v-icon color="black">view_headline</v-icon></v-btn>
		</v-app-bar>

		<v-content>
			<v-container>
				<v-data-table
					:headers="headers"
					:items="desserts"
					:search="search"
					height="100%"
					fixed-header
					disable-pagination 
					disable-sort 
					hide-default-footer
					:height="800"
					>
					<template v-slot:header="{ props: { headers } }">
						<thead>
							<tr>
								<th :colspan="1">
									<v-text-field
										v-model="search"
										append-icon="search"
										label="Search"
										single-line
										hide-details
									></v-text-field>
								</th>
								<th :colspan="1">
									This is a header
								</th>
								<th :colspan="1">
									This is a header
								</th>
								<th :colspan="1">
									This is a header
								</th>
								<th :colspan="1">
									This is a header
								</th>
								<th :colspan="1">
									This is a header
								</th>
							</tr>
						</thead>
					</template>
				</v-data-table>
			</v-container>
		</v-content>


	</v-app>
</template>

<script>

export default {
	name: 'App',

	components: {
	},

	data: () => ({
		search: '',
		headers: [
			{
				text: 'Dessert (100g serving)',
				align: 'start',
				filterable: true,
				value: 'name',
			},
			{ text: 'Calories', value: 'calories' },
			{ text: 'Fat (g)', value: 'fat' },
			{ text: 'Carbs (g)', value: 'carbs' },
			{ text: 'Protein (g)', value: 'protein' },
			{ text: 'Iron (%)', value: 'iron' },
		],
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
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
			{
				name: 'Frozen Yogurt',
				calories: 159,
				fat: 6.0,
				carbs: 24,
				protein: 4.0,
				iron: '1%',
			},
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
}
</script>
<style lang="sass">
@font-face
	font-family: 'Rajdhani-Bold'
	src: url('~@/assets/fonts/Rajdhani-Bold.ttf')
.theme--light.v-application
	background-color: #F0F4F9 !important
	background: #F0F4F9 !important
.title-custom
	font-family: 'Rajdhani-Bold' !important
</style>