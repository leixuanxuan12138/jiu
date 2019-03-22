<template>
 <div id = "search">
    <div class = "search">
    <!-- <img src="../img/jx-sprite.png" alt=""> -->
    <router-link class= "jx" to="/classify" tag="span">  <img src="../img/left.png" alt=""></router-link>
    <div class = "box" ref="box">
      <img src="../img/sousuo.png" alt="">

      <input type="text" class = "inp" placeholder="开春大促：3月19日上午十点震撼开启">
    </div>
    <h6>搜索</h6>
  </div>
  <div class = "hot">
    <span class = "iconfont icon-yooxi"></span>
    <p>热门搜索</p>
  </div>
  <div class ="classify">
    <ul>
      <li v-for="(item,index) in lis" :key="index"><span>{{item}}</span></li>
    </ul>
  </div>
  <div class = "now">
    <span class = "iconfont icon-shijian"></span>
    <p>最近搜索</p>
    <span class = "iconfont icon-lajitong spannow" @click="remove"></span>
  </div>
  <div class ="nearby">
    <ul>
      <li v-for="(item,index) in now" :key="index"><span>{{item}}</span></li>
    </ul>
  </div>
 </div>
</template>
<script>
import '../css/search.css'
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      lis: [
        '国泰', '钓鱼台', '茅台', '酒鬼酒', '五粮液', '剑南春', '汾酒', '洋河', '乌苏', '青岛', '古井贡',
        '五粮液', '剑南春', '西风', '洋河', '青岛', '西风1973', '古井贡', '剑南春', '黄尾袋鼠'
      ],
      now: [
        '开春大促：火力全开超值加价购享不停', '买100赠100'
      ]
    }
  },
  mounted () {

  },
  methods: {
    remove () {
      MessageBox.confirm('确定清空历史记录?').then(action => {
        if (action) {
          this.now = []
        }
      })
    }
  }
}
</script>
<style scoped>

#search{
  position: fixed;
  top: 0;
  width: 100%;
  right:0;
  z-index: 99;
  height: 100%;
  background:white;
}

.nearby{
  margin-top:20px;
  display: flex;
  flex-direction: column;
}
.nearby li{
  margin:5px 0 5px 35px;
  font-size: 28px;
  color: #666666
}
.classify ul{
  display: flex;
  flex-wrap: wrap;
  padding:12px 14px
}
.classify li{
  width: auto;height: 80px;
  margin-left:50px
}
.classify li span{
  width: 100%;
  height: 46px;
  background: #eaeaea;
  display: block;
  border-radius: 12px;
  padding: 6px 8px;
  color:#666666;
  text-align: center;
  line-height: 46px
}
.hot{
  width: 100%;
  height: 48px;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-top:10px
}
.hot span{
 font-size: 32px;
 margin-left: 16px
}
.hot p{
  font-size: 28px;
  margin-left: 16px
}
.search{
  display: flex;
    justify-content:start;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ccc
}
.jx img{
width: 70px;height: 70px;
}
.box{
   margin-right: 10px;
  width: 576px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
  border-radius: 10px
}
.box img{
  width: 24px;height: 24px;
  margin-right:10px;

}
.inp{
   height: 50px;
   width: 90%;
   border:0 none; resize:none;
   background: #ccc;
   font-size: 22px;

}
h6{
  color: #666666;
  font-size: 30px
}
.now{
  width: 100%;
  height: 48px;
  display: flex;
  justify-items: center;
  align-items: center;
  margin-top:10px;
  position: relative;
}
.now span{
 font-size: 32px;
 margin-left: 16px
}
.now p{
  font-size: 28px;
  margin-left: 16px
}
 .now .spannow{
 font-size: 40px;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%)
}
</style>
