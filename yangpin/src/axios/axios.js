import Vue from 'vue';
import axios from 'axios'
//引入vuex
import store from '../store/store'

// http request 请求拦截器，有token值则配置上token值
axios.interceptors.request.use(
    config => {
      if (store.state.userInfo.token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        config.headers.Authorization = `JWT ${store.state.userInfo.token}`;
      }
      // sratload();
      return config;
    },
    err => {
      return Promise.reject(err);
    });
 
// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.log('错误了没有登录')
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });