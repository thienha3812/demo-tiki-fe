import axios from 'axios'

export const API_URL = "http://localhost:8000/api"
const config = axios.create({
    baseURL:API_URL,
    timeout:5000,
})

config.interceptors.request.use(config=>{ 
    config.headers['Authorization'] = localStorage.getItem('token')
    return config
},(err=>{
    return Promise.reject(err)
}))
config.interceptors.response.use(response=>{ 
    return response
},(err=>{
    // console.clear()
    return Promise.reject(err)
}))
export default config;