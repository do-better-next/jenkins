import { onBeforeUnmount, onMounted, ref } from "vue"


export default function () {
    const x = ref(0)
    const y = ref(0)

    function handleClick(event) {
        x.value = event.pageX
        y.value = event.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', handleClick)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', handleClick)
    })

    return {
        x, y
    }
}