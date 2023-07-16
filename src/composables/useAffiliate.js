import axios from "axios";
import { ref } from "vue";

export default function useAffiliate() {
    const earning = ref(0)

    const getEarnings = () => {
        axios.get('user/get-referral-earnings')
            .then(res => res.data)
            .then(result => {
                if (Number(result)) {
                    earning.value = +result;
                }
            })
            .catch((err,xhr) => {
                console.log(err);
            })
    }

    return {
        earning,
        getEarnings
    }
}