<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { provide, ref } from 'vue';

const randomColor = () => {
  const random = Math.floor(Math.random() * 1000000)
  if (String(random).length === 5) {
    return '#' + random + String(Math.floor(Math.random() * 10))
  }
  return '#' + random
}
const colorv = ref(randomColor())
provide('color', colorv)

</script>

<template>
  <header class="header">
    <RouterLink to="/welcome" class="home" tag="button">Home</RouterLink>
    <RouterLink to="/about" class="about" tag="button">about</RouterLink>
  </header>
  <Transition 
    leave-active-class="animate__animated animate__fadeOutUp"
    enter-active-class="animate__animated animate__fadeInUp">
    <RouterView />
  </Transition>
</template>

<style >
.header {
  display: flex;
}

.home,
.about {

  border: 2px solid rgb(11, 10, 10);
  flex: 1;
  background-color: rgb(233, 203, 168);
  text-align: center;
  height: 30px;
}

.home {}

.about {
  border-left: 0px solid transparent;

}
</style>
