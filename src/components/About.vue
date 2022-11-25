<script setup>
import { useCounterStore } from '../stores/counter';
import useMousePosition from '../hooks/useMousePosition';
import { useAxios } from '../hooks/useAxios';
import { ref, computed, reactive, watch, inject } from 'vue'
import WaterFall from './WaterFall.vue';
import Loading from './Loading.vue'
import gsap from 'gsap'
const color = inject('color')
const count = useCounterStore()
const { x, y } = useMousePosition()
const imgObj = reactive({
    src: "",
    img: false,
    gender: "",
    loading: false

})
const dis = ref(false)
const width = ref(186)
const gaps = ref(10)
const num = reactive({
    current: 0,
    tweendNumber: 0
})
const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

function getImg() {
if(imgObj.gender=='男'||imgObj.gender=='女'){
    imgObj.loading = true
    const { date, load } = useAxios(`http://api.uomg.com/api/rand.avatar?sort=${imgObj.gender}&format=json`)
    imgObj.src = date
    imgObj.loading = load
    imgObj.img = true
    color.value = 'red'
}else{
    alert('请输入性别:男/女')
}

}


watch(
    () => num.current,
    (newValue) => {
        gsap.to(num, {
            duration: 1,
            tweendNumber: newValue
        })
    }
)
</script>   

<template>
    <button @click="dis = !dis">
        <h2>显示/隐藏</h2>瀑布流
    </button><br>
    <input type="number" v-model="num.current" step="20">
    <div>{{ num.tweendNumber.toFixed(0) }}</div>
    <div>鼠标x坐标:{{ $filter.format(x) }}</div>
    <div>鼠标y坐标:{{ y }}</div>
    <h1>{{ count.count }}</h1>
    <button @click="count.increment()">+1</button><br>
    <label for="">选择图片性别:</label>
    <input type="text" v-model="imgObj.gender" @keydown.enter="getImg()">
    <button @click="getImg()">发送请求</button><br>
    <img :src="imgObj.src.imgurl" v-if="!imgObj.loading">
    <img src="../assets/images/gjb.jpg" style="width:500px;height:400px">
    <Loading v-if="imgObj.loading" />
    <br>

    <Transition 
        :duration="1000" 
        leave-active-class="animate__animated animate__fadeOutUp"
        enter-active-class="animate__animated animate__fadeInUp">
        <WaterFall v-if="dis" :list="list" :width="width" :gaps="gaps" />
    </Transition>
</template>

<style  scoped lang="less">
input {
    border: 2px solid v-bind(color);
}
</style>