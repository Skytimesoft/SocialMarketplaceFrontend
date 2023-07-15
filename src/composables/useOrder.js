import axios from 'axios'
import { ref } from 'vue'

export default function useOrder() {
    const orders = ref([])

    const getOrder = () => {
        axios.get('/user/orders')
            .then(res => res.data)
            .then(result => {
                orders.value = result.data;
            })
            .catch(err => console.log(err))
    }

    return {
        orders,
        getOrder
    }
}