<template>
	<div class="home">
		<div class="search_wrapper">
			<div class="wrapper">
				<h2>Search teams</h2>

				<div class="search">
					<input class="search__input" type="text" placeholder="Search for a team" v-model="search">

					<button class="btn btn--close" @click="searchReset()" v-if="searchEmpty" title="Clear search"></button>
				</div>

				<div class="search_empty" v-if="noResults">
					<img class="search_empty__img" src="@/assets/i/icons/no-results.svg" alt="">
					<div class="search_empty__desc">No Teams Found</div>
				</div>
			</div>

			<div class="teams">
				<div class="team" :class="{'team_is_following': team.is_following}" v-for="(team, index) in filteredList" :key="index + team.id">
					<div class="team__icon"></div>

					<div class="team__desc">
						<div class="team-leagues">
							<div class="team-leagues__item" v-for="(league, index) in team.leagues" v-html="highlight(league)" :key="index"></div>
						</div>

						<div class="team__name" v-html="highlight(team.name)"></div>

						<div class="team__stadium" v-html="highlight(team.stadium)"></div>
					</div>

					<div class="team_following">
						<button class="team_following__btn btn btn--submit" @click="toggleTeam(team, index)">
							<span class="team_following--true" v-if="team.is_following">Following</span>
							<span class="team_following--false" v-else>Follow</span>
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="my_teams">
			<div class="wrapper">
				<h2>My teams</h2>
			</div>

			<div class="my_teams__empty" v-if="!myTeams.length">You aren't following any teams yet</div>

			<ul v-else class="my_teams_list">
				<li class="my_teams_list__item" v-for="myTeam in myTeams" :key="myTeam.id">
					<div class="team__icon"></div>
					<span class="my_teams_list__name">{{ myTeam.name }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

import { useMyTeamsStore } from '@/stores/myTeams.js'

export default {
	data() {
		return {
			search: '',
			teams: [],
			teamsStore: {}
		}
	},
	created() {
		axios.get('https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28').then(response => {
			this.teams = response.data
		})

		this.teamsStore = useMyTeamsStore()
	},
	computed: {
		// https://stackoverflow.com/questions/47573098/how-do-i-search-through-multiple-fields-in-vue-js-2
		filteredList() {
			const searchVal = this.search.toLowerCase()

			if (!searchVal || searchVal === ' ') return

			return this.teams.filter(team => {
				let $league = false

				team.leagues.filter(league => {
					if (league.toLowerCase().indexOf(searchVal) > -1) {
						$league = true
					}
				})

				return team.name.toLowerCase().indexOf(searchVal) > -1 ||
					team.stadium.toLowerCase().indexOf(searchVal) > -1 ||
					$league
			})
		},
		myTeams() {
			return this.teamsStore.myTeams
		},
		noResults() {
			return this.search.length > 0 && (!this.filteredList.length || false)
		},
		searchEmpty() {
			return this.search.length > 0
		}
	},
	methods: {
		// https://x-team.com/blog/highlight-text-vue-regex/
		highlight(text) {
			if (!this.search) {
				return text
			}

			return text.replace(new RegExp(this.search, "gi"), match => {
				return '<span class="highlight">' + match + '</span>'
			})
		},
		searchReset() {
			this.search = ''
		},
		toggleTeam(team, index) {
			team.is_following = !team.is_following

			if (!team.is_following) this.teamsStore.removeItem(index)
			else this.teamsStore.addItem(team)
		}
	}
}
</script>