import { ref } from "vue"
import axios from 'axios'
export default function useUser() {
    const user = ref({})
    const getUser = () => {
        axios.get('/get-user')
            .then(res => res.data)
            .then(result => {
                user.value = result;
            })
    }
    return {
        user,
        getUser
    }
}