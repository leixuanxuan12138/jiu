<template>
  <div>
    <div class="top">
      <router-link tag = "a" to="/home"><img src="../images/back.png"></router-link>
      <p>购物车</p>
      <img src="../images/category.png" alt @click="change">
    </div>
    <div class="navigation" v-show="isshow">
      <ul>
        <router-link to="/home" tag="li">
          <img src="../images/home.png" alt>
          <p>首页</p>
        </router-link>
        <router-link to="/classify" tag="li">
          <img src="../images/search.png" alt>
          <p>搜索</p>
        </router-link>
        <router-link to="/buy" tag="li">
          <img src="../images/cart.png" alt>
          <p>购物车</p>
        </router-link>
        <router-link to="/mine" tag="li">
          <img src="../images/me.png" alt>
          <p>我的酒仙</p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    change () {
      this.isshow = !this.isshow
    }
  }
}
</script>
<style scoped>
.top {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  margin: 0 auto;
  position: relative;
}
.top>a>img{
  width: 60px;
  height: 60px;
  margin: 10px 20px 0px 20px;
}
.top > img {
  width: 50px;
  height: 50px;
  margin: 10px 20px 0px 20px;
}
.top > p {
  font-size: 30px;
  /* color: #fff; */
  line-height: 80px;
  font-weight: 200
}
.navigation {
  width: 100%;
  height: 110px;
  background: #efefef;
  z-index: 10;
  position: absolute;
  top: 80px;
  left: 0;
  /* display: none; */
}
.navigation > ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.navigation > ul > li {
  width: 160px;
  height: 100px;
  float: left;
  display: block;
}
.navigation > ul > li > p {
  color: #848d96;
  text-align: center;
  font-size: 30px;
}
.navigation > ul > li > img {
  width: 54px;
  height: 54px;
  display: inline-block;
  margin-left: 60px;
  padding-top: 5px;
}
</style>
