<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { provide, ref } from 'vue';

const randomColor=()=>{
  const random = Math.floor(Math.random()*1000000 )
  if(String(random).length===5){
    return '#'+random+String(Math.floor(Math.random()*10 ))
  }
return '#'+random
}
const colorv=ref(randomColor())
provide('color',colorv)

</script>

<template>
  <header>

        <RouterLink to="/welcome" class="home" tag="button">Home</RouterLink>
        <RouterLink to="/about" class="about" tag="button">about</RouterLink>
  </header>
  <RouterView />
</template>

<style scoped>

.home {
	display: block;
	margin-bottom: 10px;
	width: 50px;
	height: 30px;
	background-color: #f80;
}
.about {
	display: block;
	width: 50px;
	height: 30px;
	background-color: #f80;
}
</style>
