<template>
  <div class = "box wrapper">
    <ul ref="uls">
      <li v-for="(item,index) in lis" :key="index" ref="lis">
        <img :src="item.imgurl" alt="">
        <p>{{item.name}}</p>
        <span>{{item.nowP}}</span>
        <h6>{{item.oldP}}</h6>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
// import { setTimeout } from 'timers'
export default {
  data () {
    return {
      lis: [
        {
          imgurl: 'https://img06.jiuxian.com/2016/0819/2ad9e5472e75490788811c3fc4b5129e4.jpg',
          name: '52°泸州老窖特曲50ml',
          nowP: '¥19.00',
          oldP: '¥28.00'
        },
        {
          imgurl: 'https://img09.jiuxian.com/2019/0318/f181ff32e1ca403a8d976de098dc88974.jpg',
          name: '52°泸州老窖特曲50ml',
          nowP: '¥19.00',
          oldP: '¥28.00'
        },
        {
          imgurl: 'https://img10.jiuxian.com/2019/0220/89be70d11c9a43cfa931700410df5a2b4.jpg',
          name: '52°泸州老窖特曲50ml',
          nowP: '¥19.00',
          oldP: '¥28.00'
        },
        {
          imgurl: 'https://img09.jiuxian.com/2017/0822/78c0b66acb7a4707aedb70de47000a814.jpg',
          name: '52°泸州老窖特曲50ml',
          nowP: '¥19.00',
          oldP: '¥28.00'
        },
        {
          imgurl: 'https://img06.jiuxian.com/2016/0819/2ad9e5472e75490788811c3fc4b5129e4.jpg',
          name: '52°泸州老窖特曲50ml',
          nowP: '¥19.00',
          oldP: '¥28.00'
        }
      ]
    }
  },
  mounted () {
    window.onload = () => {
      this.$refs.uls.style.width = this.$refs.lis[0].offsetWidth * this.lis.length + 'px'
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.wrapper', {
          scrollX: true,
          scrollY: false,
          click: true
        })
      })
    }
  },
  created () {

  }
}
</script>
<style scoped>
.box{
  width: 100%;
  overflow: hidden;
  margin-top: 20px
}
ul{
  display: flex;
  flex-direction: row
}
li{
  padding: 10px
}
li img{
  width: 192px;
  height: 192px;
}
p{
  color: #252525;
  width: 192px
}
span{
  color:#fc5a5a;
  font-size: 28px
}
h6{
  color: #999999;
  text-decoration: line-through
}
</style>
