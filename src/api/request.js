//对于axios进行二次封装
import axios from 'axios';
//引入进度条
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css"; 

//创建一个axios实例
const requests = axios.create({
    baseURL:'/api',
    timeout:5000,
});
//请求拦截器:在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //config:配置对象，对象里面有一个属性很重要，headers请求头
    nprogress.start();
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
//响应拦截器
  requests.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    nprogress.done();
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  //对外暴露
  export default requests;