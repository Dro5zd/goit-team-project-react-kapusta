import axios from 'axios';
export const PublicApi = axios.create({
    baseURL: 'https://kapusta-backend.goit.global'
})
export const PrivateApi = axios.create({
    baseURL: 'https://kapusta-backend.goit.global'
})

export const token = {
    set(token: string) {
        PrivateApi.defaults.headers.common.Authorization = token
    },
    unset(){
        PrivateApi.defaults.headers.common.Authorization = null
    }
}