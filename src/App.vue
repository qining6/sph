<template>
  <div>
    <MyHeader></MyHeader>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <Footer></Footer>
    </div>
</template>

<script>
import MyHeader from './components/Header'
import Footer from './components/Footer'
export default {
  name:'App',
  components:{
    MyHeader,
    Footer
  }
}
</script>

<style>

</style>