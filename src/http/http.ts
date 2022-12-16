import axios from 'axios';



export const PublicApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
})
export const PrivateApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
})

export const token = {
    set(token: string) {
        PrivateApi.defaults.headers.common.Authorization = token
    },
    unset(){
        PrivateApi.defaults.headers.common.Authorization = null
    }
}