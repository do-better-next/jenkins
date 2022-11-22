<script setup>
import { useCounterStore } from '../stores/counter';
import useMousePosition from '../hooks/useMousePosition';
import { useAxios } from '../hooks/useAxios';
import { ref, computed, reactive, watch, inject } from 'vue'
import List from './List.vue';
import WaterFall from './WaterFall.vue';
import Loading from './Loading.vue'
import gsap from 'gsap'
const color = inject('color')
const count = useCounterStore()
const { x, y } = useMousePosition()
const imgObj = reactive({
    src: "",
    img: false,
    gender: "男",
    loading: false

})
const dis = ref(false)
const width = ref(186)
const gaps = ref(10)
const obg = ref({
    name: '曹西果',
    gender: "女"
})
const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})
const num = reactive({
    current: 0,
    tweendNumber: 0
})
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})

const list = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

function getImg() {
    imgObj.loading = true
    const { date, load } = useAxios(`https://api.uomg.com/api/rand.avatar?sort=${imgObj.gender}&format=json`)
    imgObj.src = date
    imgObj.loading = load
    imgObj.img = true
    color.value = 'red'

}
const getName = (res) => {
    console.log(res)
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
    <input type="number" v-model="num.current" step="20">
    <div>{{ num.tweendNumber.toFixed(0) }}</div>
    <List @on-click="getName" :obj1="obg" />
    <span>{{ publishedBooksMessage }}</span>
    <div>鼠标x坐标:{{ $filter.format(x) }}</div>
    <div>鼠标y坐标:{{ y }}</div>
    <h1>{{ count.count }}</h1>
    <button @click="count.increment()">+1</button><br>
    <label for="">选择图片性别:</label>
    <input type="text" v-model="imgObj.gender" @keydown.enter="getImg()">
    <button @click="getImg()">发送请求</button><br>
    <img :src="imgObj.src.imgurl" v-if="!imgObj.loading">
    <Loading v-if="imgObj.loading" />
    <br>
    <button @click="dis = !dis">显示/隐藏瀑布流</button><br>
    <Transition :duration="1000" leave-active-class="animate__animated animate__fadeOutUp"
        enter-active-class="animate__animated animate__fadeInUp">
        <WaterFall v-if="dis" :list="list" :width="width" :gaps="gaps" />
    </Transition>
</template>

<style  scoped lang="less">
input {
    border: 2px solid v-bind(color);
}
</style>