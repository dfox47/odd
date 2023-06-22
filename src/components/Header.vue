<template>
	<div class="header_wrapper">
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

		<div class="user-info">
			<img class="user-info__img" src="@/assets/i/avatar.png" alt="">

			<div class="user-info__level">Level 5</div>
		</div>

		<nav class="nav">
			<ul class="nav-list">
				<li class="nav-list__item"><a class="nav-list__link active" href="/">My teams</a></li>
				<li class="nav-list__item"><a class="nav-list__link" href="/">About</a></li>
			</ul>
		</nav>
	</div>
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
