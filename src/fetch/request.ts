import axios from 'axios';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
const service = axios.create({
    baseURL: process.env.VUE_APP_URL, // api的base_url
    timeout: 30 * 1000, // 请求超时时间
    headers: {
        crossDomain: true,
        withCredentials: true, // 意思是携带cookie信息,保持session的一致性
    },
});

// 添加请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 在发送请求之前做些什么
        return config;
    },
    (error: any) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    },
);
// 添加响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        // 对响应数据做点什么

        return response.data;
    },
    (error: any) => {
        // 对响应错误做点什么
        return Promise.reject(error);
    },
);

export default service;
