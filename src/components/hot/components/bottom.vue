<template>
    <div>
      <div class="pic">
        <ul>
          <router-link to="/hot" tag="li">
            <img src="https://img10.jiuxian.com/bill/2018/1031/fb02b7d4ec2f4c978f55722e795a3417.jpg" alt="">
          </router-link>
          <router-link to="/hot" tag="li">
            <img src="https://img10.jiuxian.com/bill/2018/1031/c084879b81c24b8698bd7a69c982cc98.jpg" alt="">
          </router-link>
        </ul>
      </div>
      <div class="btm">
        <div @click="tan">
          <img src="../images/lessInfo.png" alt="">
          <span>返回<br>顶部</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    tan () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
<style scoped>
.pic{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.pic>ul{
  width: 100%;
   display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.pic>ul>li{
   width: 50%;
}
.pic>ul>li>img{
  width: 100%;
}
.btm{
  width:100%;
  height: 200px;
  margin-top: 50px;
}
.btm>div{
  color: #000;
  display: block;
  width: 112px;
  height: 112px;
  margin: 0 auto;
  border: 6px solid red;
  background: #ffffff;
  border-radius: 50%;

}
.btm>div>img{
  width: 40px;
  height: 40px;
  display: block;
  margin: 0 auto;
}
.btm>div>span{
  width: 100%;
  height: 60px;
  display: block;
  text-align: center;
}
</style>
