<template>
	<div class="home">
		<div class="search_wrapper">
			<div class="wrapper">
				<h2>Search teams</h2>

				<div class="search">
					<input class="search__input" type="text" placeholder="Search for a team" v-model="input">

					<button class="btn btn--close search__close"></button>
				</div>
			</div>
		</div>

		<div class="my_teams">
			<div class="wrapper">
				<h2>My teams</h2>

<!--				<div class="my_teams__empty" v-if="filteredList().length">You aren't following any teams yet</div>-->
				<div class="my_teams__empty">You aren't following any teams yet</div>
			</div>
		</div>
	</div>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios'

export default {
	data() {
		return {
			searchResults: [],
			input: ''
		}
	},
	created() {
		axios.get('https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28').then(function (data) {
			console.log('--------------------------')
			console.log(data.data)
			// this.searchResults = data.slice(0,10)
		})
	},
	computed: {
		filteredList: function () {
			return this.searchResults.title.match(this.input)
		}
	},
	methods: {
		searchInput() {
			let input = ref('');

			const searchBase = ['some', 'any', 'text'];

			function filteredList() {
				return searchBase.filter((team) => {
					team.toLowerCase().includes(input.value.toLowerCase())
				})
			}
		}
	},
	mounted() {
		this.searchInput()
	}
}
</script>