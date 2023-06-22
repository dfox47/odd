<template>
	<header class="header">
		<div class="header-left">
			<button class="btn btn--back"></button>

			<a class="logo" href="/"><img class="logo__img" src="@/assets/i/logo.svg" alt="logo"></a>
		</div>

		<div class="header-title">RichyRich</div>

		<div class="notification">
			<span class="notification__number">2</span>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {}
	},
	mounted() {},
	unmounted() {}
}
</script>
