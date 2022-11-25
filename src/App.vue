<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref,watch ,provide} from 'vue';
import Foot from './views/Footer.vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const randomColor = () => {
	const random = Math.floor(Math.random() * 1000000)
	if (String(random).length === 5) {
		return '#' + random + String(Math.floor(Math.random() * 10))
	}
	return '#' + random
}
const colorv = ref(randomColor())
provide('color',colorv)
</script>

<template>
	<header class="header">
		<!-- :class="{'active':}" -->
		<RouterLink to="/welcome" :class="[route.fullPath == '/welcome' ? 'active' : '', 'home']">Home</RouterLink>
		<RouterLink to="/about" :class="[route.fullPath == '/about' ? 'active' : '', 'about']">About</RouterLink>
	</header>
	<div class="main">
		<RouterView />
	</div>
	<Foot class="footer" />
</template>

<style  scoped>
.active {
	background-color: v-bind(colorv);
}

.header {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 999;
	height: 30px;
	background-color: #fff;
}

.main {
margin-top: 30px;
}

.footer {

	height: 250px;
	background-color: v-bind(colorv);
	width: 100%;
}


.home,
.about {
	display: inline-block;
	border: 2px solid rgb(11, 10, 10);
	width: 50%;
	height: inherit;
	line-height: 25px;
	text-align: center;
	color: bisque;
}

.about {
	border-left: 0 solid transparent;
}























</style>
