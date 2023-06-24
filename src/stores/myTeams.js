import { defineStore } from 'pinia'

export const useMyTeamsStore = defineStore({
	id: 'myTeams',
	state: () => ({
		counter: 0
	}),
	getters: {
		doubleCount: (state) => state.counter * 2
	},
	actions: {
		increment() {
			this.counter++
		},
		toggleFollow(teamId) {
			// const team = this.teams.find((obj)) => obj.id === teamId

			if (team) {
				team.follow = !team.follow
			}
		}
	}
})
