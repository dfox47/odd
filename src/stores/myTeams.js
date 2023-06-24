import { defineStore } from 'pinia'

export const useMyTeamsStore = defineStore({
	id: 'myTeams',
	state: () => ({
		myTeams: []
	}),
	actions: {
		addItem(myTeams) {
			this.myTeams.push(myTeams)
		},
		removeItem(index) {
			this.myTeams.splice(index, 1)
		}
	}
})