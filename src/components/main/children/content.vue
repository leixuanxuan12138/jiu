<template>
  <div class= "box">
    <ul>
      <li v-for="(item,index) in lis[i]" :key="index">
        <img :src="item.imgurl" alt="">
        <div class = "app">
          <p>{{item.name}}</p>
          <span>{{item.dat}}</span>
          <h4>{{item.price}}</h4>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created () {
    this.i = this.$route.params.id
  },
  data () {
    return {
      i: '',
      lis: [[
        {
          imgurl: 'http://img08.jiuxian.com/2016/0614/a8aa081133ae4871ab26071d716a31104.jpg',
          name: '53°国台·品鉴15  500ml',
          dat: '',
          price: '￥96.00'
        },
        {
          imgurl: 'http://img07.jiuxian.com/2017/0929/d7ac2f778c764324a71d1d64e09ca8314.jpg',
          name: '53°贵州茅台集团  习酒 精品红习酒 酱香型白酒整箱 500ml*6瓶',
          dat: '贵州习酒 酱香突出 醇厚丰满 空杯留香',
          price: '￥7986.00'
        },
        {
          imgurl: 'http://img09.jiuxian.com/2018/0109/04ac75b9351341978bcd4d9e910feabf4.jpg',
          name: '53°钓鱼台V20 500ml',
          dat: '',
          price: '￥76.00'
        },
        {
          imgurl: 'http://img07.jiuxian.com/2018/0809/3c286e1f18634b46a158d243c605c9494.jpg',
          name: '52°汾酒集团 汾酒原浆 汾牌1915藏品奢华礼盒 清香型白酒475ml*6瓶',
          dat: '汾酒精美礼盒，礼赠宴请佳选！',
          price: '￥296.00'
        },
        {
          imgurl: 'http://img09.jiuxian.com/2017/0822/78c0b66acb7a4707aedb70de47000a814.jpg',
          name: '52°酒鬼原浆酒500ml',
          dat: '经典酒鬼酒，人生馥郁香',
          price: '￥696.00'
        },
        {
          imgurl: 'https://m.jiuxian.com/mjava_statics/images/loazy_img.png',
          name: '法国原瓶原装进口红酒 AOC级波尔多法定产区法兰骑士田园干红葡萄酒750ml（6瓶装）',
          dat: '法国AOC波尔多法定产区',
          price: '￥11796.00'
        }
      ],
      [
        {
          imgurl: 'http://img07.jiuxian.com/2016/0506/3f1e571c3d844bb5a1c4789e19a5a0284.jpg',
          name: '【礼盒】澳洲红酒天鹅庄家族经典西拉干红葡萄酒黑色单支礼盒（双支装）',
          dat: '十几年如一日，精心酿造',
          price: '￥11796.00'
        },
        {
          imgurl: 'http://img08.jiuxian.com/2017/0626/46a5ce68b23440b1b51cbd67efc6651a4.jpg',
          name: '澳大利亚红酒奔富寇兰山赤霞珠西拉红葡萄酒750ml（又名：西拉卡本内）',
          dat: '橡木桶陈酿 扑鼻而来的圣诞蛋糕及布丁的香气 接着是肉桂与橡木的辛辣气息',
          price: '￥196.00'
        },
        {
          imgurl: 'http://img08.jiuxian.com/2016/0118/4b612b9d8bfa4d7c9965857e0075cc574.jpg',
          name: '西班牙红酒西班牙德古斯特干红葡萄酒(双支皮盒套装）750ml*2',
          dat: '双支皮礼盒 酒具四件套',
          price: '￥796.00'
        },
        {
          imgurl: 'https://m.jiuxian.com/mjava_statics/images/loazy_img.png',
          name: '澳洲整箱红酒澳大利亚奔富洛神山庄设拉子赤霞珠红葡萄酒750ml（6瓶装）',
          dat: '奔富洛神混酿款，口感更丰富，热销爆款',
          price: '￥596.00'
        },
        {
          imgurl: 'http://img07.jiuxian.com/2016/0506/3f1e571c3d844bb5a1c4789e19a5a0284.jpg',
          name: '【礼盒】澳洲红酒天鹅庄家族经典西拉干红葡萄酒黑色单支礼盒（双支装）',
          dat: '十几年如一日，精心酿造',
          price: '￥11796.00'
        },
        {
          imgurl: 'https://m.jiuxian.com/mjava_statics/images/loazy_img.png',
          name: '法国整箱红酒法国原瓶进口葛雷奥利干红葡萄酒750ml（6瓶套）酒杯酒刀',
          dat: '爆款热销 高性价比套装',
          price: '2796.00'
        },
        {
          imgurl: 'https://m.jiuxian.com/mjava_statics/images/loazy_img.png',
          name: '【礼盒】澳洲红酒天鹅庄家族经典西拉干红葡萄酒黑色单支礼盒（双支装）',
          dat: '西班牙整箱红酒原瓶进口莫拉斯城堡干红葡萄酒750ml*6（松木礼盒装）',
          price: '￥496.00'
        }
      ]
      ]
    }
  }
}
</script>
<style scoped>
.box{padding: 20px}
.app{position: relative;margin-left: 10px}
li{
  display: flex;
  padding: 20px;
  border-bottom:2px solid #cccccc
}
img{
  width: 200px;
  height: 200px;
}
p{

}
span{
  color: #f58f2b;
    height: 18px;
}
h4{
  color: #df4a44;font-size: 36px;
  font-weight: 800;
  position: absolute;
  left: 0;
  bottom:0
}
</style>
