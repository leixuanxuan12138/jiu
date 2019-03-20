<template>
    <ul>
      <router-link to = "/home" tag="li"><i class = "iconfont icon-home"></i>首页</router-link>
      <router-link to = "/classify" tag="li"><i class = "iconfont icon-fen_lei2"></i>分类</router-link>
      <router-link to = "/hot" tag="li"><img src="https://img09.jiuxian.com/bill/2018/0528/56760d41e3e745afa14e3cea1713631c.png" alt=""></router-link>
      <router-link to = "/buy" tag="li"><i class = "iconfont icon-gouwuche"></i>购物车</router-link>
      <router-link to = "/mine" tag="li"><i class = "iconfont icon-wode"></i>我的酒仙</router-link>
    </ul>
</template>
<script>
import '@/assets/home_img.css'
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style scoped>
ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  background: white;
}
li{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    align-items: center;
  width: 20%;
  color:#333;
  font-size: 12px
}
li img{
  width: 84px;
  height: 84px;
}
li .iconfont{
  font-size: 42px;
  display: block;
}
.router-link-exact-active{
  color:red
}
</style>
