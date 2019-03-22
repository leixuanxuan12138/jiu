<template>
  <div id = "home" ref="home" :class="{red:isshow}" >
    <img src="../img/left.png" alt="" class= "left" @click="back">
    <div class = "boxx" ref="box">
      <img src="../img/sousuo.png" alt="">
      <input type="text" class = "inp" placeholder="开春大促：3月19日上午十点震撼开启" @focus="change">
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
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 200) {
        this.isshow = true
      } else {
        this.isshow = false
      }
    })
  },
  methods: {
    change () {
      location.hash = '/search1'
    },
    back () {
      location.hash = '/classify'
    }
  }
}
</script>
<style scoped>
.left{
  width: 60px;
  height:60px;
  display: block
}
#home{
    padding: 5px 20px;
    display: flex;
    align-items: center;
    height: 80px;
}
.boxx{
  display: flex;
  background: #ececec;
  align-items: center;
  height: 56px;
  width: 90%;
  border-radius: 10px;
  overflow: hidden;
  justify-content: space-evenly
}
img{
  width: 24px;height: 24px;
}
input{
  border: 0 none;
  height: 56px;
  width: 90%;
  background: #ececec;
}
</style>
