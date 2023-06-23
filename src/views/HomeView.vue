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

			<text-highlight :queries="['test']">More test test</text-highlight>

			<div class="teams">
				<div class="team" v-for="team in teams" :key="team.id">
					<div class="team__icon"></div>

					<div class="team__desc">
						<div class="team-leagues">
							<div class="team-leagues__item" v-for="league in team.leagues">{{ league }}</div>
						</div>

						<div class="team__name">{{ team.name.split('').join('') }}</div>

						<div class="team__stadium">{{ team.stadium }}</div>
					</div>

					<div class="team_following">
						<button class="team_following__btn btn btn--submit">
							<span class="team_following--true" v-if="team.is_following">Following</span>
							<span class="team_following---false" v-else>Follow</span>
						</button>
					</div>
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

import axios from 'axios'
import {ref} from 'vue'

export default {
	data() {
		return {
			teams: [],
			input: ''
		}
	},
	created() {
		axios.get('https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28').then(response => {
			console.log('--------------------------')
			console.log(response.data)
			this.teams = response.data
			// this.teams = data.slice(0,10)
		})
	},
	computed: {
		filteredList: function () {
			return this.teams.title.match(this.input)
		}
	},
	methods: {
		searchInput() {
			let input = ref('')

			const searchBase = ['some', 'any', 'text']

			function filteredList() {
				return searchBase.filter((team) => {
					team.toLowerCase().includes(input.value.toLowerCase())
				})
			}
		}
	},
	mounted() {
		// this.searchInput()
	}
}
</script>