// 存放 axios的配置以及拦截器
import axios from 'axios';

// 默认路径
const baseURL = 'http://127.0.0.1/8000/'

export const Service = axios.create({
    timeout: 7000,
    baseURL: baseURL,
    method: postMessage,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// 请求拦截
Service.interceptors.request.use(config => {

    return config;
}, error => {
    return Promise.reject(error)
})

// 添加请求拦截器
Service.interceptors.response.use(response => {
    return response;
}, error => {
    return Promise.reject(error)
})