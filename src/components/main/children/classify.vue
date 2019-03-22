<template>
  <div class="box">
    <ul>
      <li v-for="(item,index) in lis[s]" :key="index" ref="lis" :class="{red:index===num}">{{item}}</li>
    </ul>
    <div class="btm">
     <p></p>
     <h6>精品推荐</h6>
   </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lis: [
        ['茅台', '五粮液', '汾酒', '泸州老窖', '酱香', '清香', '浓香', '查看全部'],
        ['意大利', '法国', '英国', '北美', '澳大利亚', '美国', '新西兰', '查看全部']
      ],
      num: 7,
      s: ''
    }
  },
  created () {
    this.s = this.$route.params.id
  }
}
</script>
<style scoped>
.box{
  padding: 20px
}
ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around
}
li{
 width: 23%;
 height: 62px;
 line-height: 62px;
 text-align: center;
 border: 1px solid #c3c3c3;
 color: #373737;
  box-sizing: border-box;
  margin: 4px 0;
  font-size: 30px
}
.red{
 color: #de4943;
    font-weight: 800;
}
.btm{
  width: 100%;
  height: 80px;
  position: relative;
  margin-bottom: 50px;
  overflow: hidden;
  margin-top:30px
}
.btm p{
width: 100%;
height: 2px;
background: #3a3a3a;
position: absolute;
top: 50%;
left: 0;
transform: translateY(-50%);

}
.btm h6{
  width: 220px;
  margin: 0 auto;
  height: 80px;
  color: #878686;
  background: white;
  font-size: 28px;
  position: absolute;
  line-height: 80px;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  color: #3a3a3a;
font-size: 36px
}
</style>
