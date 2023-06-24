import { defineStore } from 'pinia'

export const useMyTeamsStore = defineStore({
	id: 'items',
	state: () => ({
		items: []
	}),
	actions: {
		addItem(item) {
			this.items.push(item)
		},
		removeItem(index) {
			this.items.splice(index, 1)
		}
	}
})