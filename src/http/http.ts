import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
    set(token: string) {
        axios.defaults.headers.common.Authorization = token
    },
    unset(){
        axios.defaults.headers.common.Authorization = ''
    }
}