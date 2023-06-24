import { defineStore } from 'pinia'

export const useMyTeamsStore = defineStore({
	id: 'myTeams',
	state: () => ({
		myTeams: []
	}),
	actions: {
		addItem(team) {
			this.myTeams.push(team)
		},
		removeItem(team) {
			this.myTeams = this.myTeams.filter(item => item !== team)
		}
	}
})