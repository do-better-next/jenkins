<script setup>
import { onMounted, reactive } from 'vue';

const props = defineProps({
    list: {
        type: Array
    },
    width:{
        type:Number
    },
    gaps:{
        type:Number
    }
})
function height(){return currentTop[0]+450}
const waterFall = reactive([])
const heightList =[]
const topList =[]
const currentTop=[0]
const init = () => {
    const width = props.width
    const x = document.body.clientWidth
    const colum = Math.floor(x / props.width)
    for (let i = 0; i <= props.list.length - 1; i++) {
        if (i < colum) {
            const height = Math.floor(Math.random() * 300 + 90) 
            let RandomSixStr = ''
            for (let i = 0; i < 6; i++) {
                RandomSixStr += String(Math.floor(Math.random() * 10))
            }
            props.list[i].left = i * width + 'px'
            props.list[i].top = 20 + 'px'
            props.list[i].background = '#'+RandomSixStr
            props.list[i].height = height+'px'
            props.list[i].width = width-props.gaps+'px'
            waterFall.push(props.list[i])
            heightList.push(height)
        }else{
            let current =heightList[0]
            let index = 0
            heightList.forEach((h,i)=>{
                if(h<current){
                    current=h
                    index=i
                }
            })
            const height = Math.floor(Math.random() * 300 + 100)
            let RandomSixStr = ''
            for (let i = 0; i < 6; i++) {
                RandomSixStr += String(Math.floor(Math.random() * 10))
            }
            props.list[i].top=current +40+'px'
            props.list[i].left = index * width + 'px'
            props.list[i].background = '#'+RandomSixStr
            props.list[i].height = height+'px'
            props.list[i].width = width-props.gaps+'px'
            heightList[index]=heightList[index]+height+20
            waterFall.push(props.list[i])
            topList.push(current+40)
        }
        height()

    }
   
    const lasttopList=topList.slice(-10,-1)
    lasttopList.forEach((item)=>{
        if(item>currentTop[0]){
            currentTop[0]=item
        }
    })
    console.log(currentTop)
}
onMounted(() => {

    init()
})
</script>

<template>
    <div :style="{height:height()+'px'}" class="wraps">
        <div class="items" v-for="item in waterFall" v-html="'颜色是:'+item.background" :style="{
            height: item.height,
            top: item.top,
            left: item.left,
            backgroundColor: item.background,
            width:item.width
            }"
        ></div>
    </div>
</template>

<style  lang="less" scoped>
.wraps {
	position: relative;
	background-color: #ddd6f3;
	.items {
		position: absolute;
		border-radius: 10px;
	}
}
















</style>