import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
//引入仓库
import store from '@/store'

Vue.config.productionTip = false

Vue.component(TypeNav.name,TypeNav)
//测试
// import {reqCategoryList} from '@/api/index';
// reqCategoryList();

new Vue({
  render: h => h(App),
  //注册路由:底下的写法Key value一致省略v (router小写)
  router,
  //注册仓库:组件实例的身上会多一个$store属性
  store
}).$mount('#app')
