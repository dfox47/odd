<template>
	<div id="app">
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'

export default {
	name: 'App',
	components: {
		Footer,
		Header
	}
}
</script>

<style lang="scss">@import '@/assets/styles/_styles.scss';</style>
