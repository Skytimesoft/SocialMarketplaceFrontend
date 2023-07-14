import axios from "axios";
import { ref } from "vue"

export default function useFunds() {
    const funds = ref([])
    const loadingFunds = ref(false)
    const getFunds = () => {
        loadingFunds.value = true;
        axios.post('/user/get-fund-history')
            .then(res => res.data)
            .then(result => {
                funds.value = result;
                loadingFunds.value = false;
            }).catch(err => {
                loadingFunds.value = false;
            })
    }
    return {
        funds,
        loadingFunds,
        getFunds,
    }
}