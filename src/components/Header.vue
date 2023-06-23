<template>
	<div class="header_wrapper">
		<header class="header">
			<div class="header-left">
				<button class="btn btn--back"></button>

				<a class="logo" href="/">
					<img class="logo__img logo__img--mobile" src="@/assets/i/logo.svg" alt="ODD">
					<img class="logo__img logo__img--desktop" src="@/assets/i/logo_l.svg" alt="ODD">
				</a>
			</div>

			<div class="show_mobile">
				<div class="user-name">RichyRich</div>
			</div>

			<div class="notification">
				<span class="notification__number">2</span>
			</div>
		</header>

		<div class="user-info">
			<div class="user-info__main">
				<img class="user-info__img" src="@/assets/i/avatar.png" alt="">

				<div class="user-info__level">Level 5</div>
			</div>

			<div class="show_desktop">
				<div class="user-name">RichyRich</div>
			</div>
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
