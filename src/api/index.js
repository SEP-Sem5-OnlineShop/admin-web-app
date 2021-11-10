import Axios  from 'axios'
import general from './general/admin'
import auth from './auth/index'
import store, {actions} from "../store/index"
import admin from './general/admin'



/*
 * Setup axios  
 */
// const BASE_URL = 'https://ontheway-backend-auth-api.herokuapp.com/api'
// const BASE_URL = 'http://localhost:8000/api'
// const BASE_URL = 'http://20.102.65.167:8000/api'
const BASE_URL = 'http://localhost:8000/api'
Axios.defaults.baseURL = BASE_URL
Axios.defaults.withCredentials = false

const axiosApiInstance = Axios.create()





/**
 * If the access token will be expired then get new access token using the refresh token
 */
 Axios.interceptors.request.use( function (config) {
     Axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem("token")}`}
    return config
});

Axios.interceptors.response.use(async response => {
        return response
    },
    async function (error) {
        const originalRequest = error.config;
        // console.log(originalRequest)
        if(error.response.status === 401 && error.response.data.message === "Token Expired!") {
            // const {status, data} = await general.token()
            store.dispatch(actions.user.setUserData({}))
            store.dispatch(actions.user.setAuthToken(""))
            store.dispatch(actions.user.setRole("guest"))
            window.localStorage.removeItem("userData")
            window.localStorage.removeItem("token")
            window.localStorage.setItem("role", "guest")
            // if(status === 401) {
            //     // Force logout and login again
            // }
        }else if(error.response.status === 401 && error.response.data.message === "Session is invalid!")  {
            const refreshToken = window.localStorage.getItem("refreshToken")
                const {status, data} = await auth.token(refreshToken)
                if (data && status===200) {
                    setAuthToken(data.accessToken)
                    window.localStorage.setItem("refreshToken", data.refreshToken)
                    window.localStorage.setItem("token", data.accessToken)
                    originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
                    originalRequest._retry = true;
                    return axiosApiInstance(originalRequest)
                }
            }
            else return error
        }
    
)

export const setAuthToken = (token) => {
    Axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
}

export const fullURL = (path) => {
    return new URL(path, BASE_URL).href
}
export const authApi = auth(Axios)
export const axios = Axios
export const baseURL = BASE_URL;
export const adminApi = admin(Axios)
export const genApi = general(Axios)










    