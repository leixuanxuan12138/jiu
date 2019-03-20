<template>
  <div id = "home" ref="home" :class="{red:isshow}" >
    <!-- <img src="../img/jx-sprite.png" alt=""> -->
    <span class = "jx"><img src="../img/jx.png" alt=""></span>
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
      location.hash = '/home/search'
    }
  }
}
</script>
<style scoped>
#home{
  transition: all 2s ease;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  width: 100%;

}
  .jx{
    width: 170px;height:80px;display: block;
    transform: scale(0.7);
    border-radius: 20px;
    overflow: hidden;
  }
  .jx img{
    width: 100%;
    height: 100%
  }
  .inp{
    width: 80%;
    height: 54px;
    border:0 none; resize:none;
    font-size: 24px;
  }
  img{
    width: 24px;
    height: 24px;
    margin: 0 5px;
  }
  .boxx{
    display: flex;
    align-items: center;
    background: white;
    border-radius: 15px;
    width: 70%;
    height: 54px;
    box-sizing: border-box;
    padding:0 0 0 10px;
    margin-left:-20px
  }
  .red{
    background: red;
    opacity: 0.9;
    transition: all 2s ease
  }
</style>
