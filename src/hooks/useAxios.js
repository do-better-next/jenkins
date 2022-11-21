import {ref} from 'vue'
import axios from 'axios'

export   function  useAxios (url ){
    const load= ref(true)
    const date= ref(null)

    axios.get(url).then((res)=>{
        date.value=res.data
        load.value=false
    })

    return{
        load,
        date,
    }
}