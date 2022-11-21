<script lang="ts" setup>
import { inject, ref } from 'vue'
//接收父组件的值，返回的只可以在模板中直接使用
const props = defineProps({
   obj1: {
      type: Object,
      default: {}
   }
})

//给父组件传值
const emit = defineEmits(['onClick'])
const send = () => {
   emit('onClick', '曹西果')
}
const color = inject('color')

const num = ref(1)
const handleChange = (value: number) => {
   console.log(value)
}
const flag=ref(true)
</script>

<template>
   <el-skeleton :rows="5" :loading="flag" animated ></el-skeleton>
   
   <button @click="flag!=flag">切换加载</button>
   <div>我是list组件内容,颜色是app组件传过来的</div>
   <div>{{ obj1.name }}--{{ obj1.gender }}</div>
   <div @click="send">给父组件传值</div>
   <el-progress type="circle" :percentage="num" status="success" />
   <el-input-number v-model="num" :min="1" :max="100" @change="handleChange" />
</template>

<style  scoped>
div {
	color: v-bind(color);
}

.demo-progress .el-progress--line {
	margin-bottom: 15px;
	width: 350px;
}

.demo-progress .el-progress--circle {
	margin-right: 15px;
}














</style>