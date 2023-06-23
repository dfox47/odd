import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'

import TextHighlight from 'vue-text-highlight'

import App from './App.vue'
import router from './router'

Vue.component('text-highlight', TextHighlight)

Vue.use(PiniaVuePlugin)

new Vue({
	router,
	pinia: createPinia(),
	render: (h) => h(App)
}).$mount('#app')
