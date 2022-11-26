<script setup>
import { useCounterStore } from '../stores/counter';
import { inject } from 'vue';
const count = useCounterStore()
const color = inject('color')                                
</script>

<template>
   <input v-model="count.count" />
   <button @click="count.increment()">+1</button>
   <p>Nginx常用命令：<br>
      1. ps -ef | grep nginx 查看nginx进程<br>
      2. nginx -s stop 停止nginx<br>
      3. 查看80端口被那个进程占用 lsof -i:80<br>
      4. 查看系统内核信息，cat /proc/version</p>
   <img src="../assets/images/linuxContent.png" style="width:600px;height: 450px;" alt="">   
</template>

<style  scoped>
input {
	border: 2px solid v-bind(color);
}
p {
	color: v-bind(color);
}






</style>