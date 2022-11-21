<script setup>
import { useCounterStore } from '../stores/counter';
import { inject } from 'vue';
const count = useCounterStore()         
const color= inject('color')                                
</script>

<template>
   <input v-model="count.count" />
   <button @click="count.increment()">+1</button>
</template>

<style  scoped>
input {
	border: 2px solid v-bind(color);
}



</style>