<template>
  <div class="content">
    <img src="https://img08.jiuxian.com/bill/2018/1010/d4ace760e1f74ef589d979c8db9475de.jpg" alt>
    <div class="wine">
      <ul>
        <li v-for="(item,index) in lis" :key="index">
          <a href>
            <img :src="item.img" alt>
            <p>{{item.name}}</p>
            <span class="text">{{item.adText}}</span>
            <div class="btm">
              <span>{{item.price}}</span>
              <a href>{{item.a}}</a>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lis: [
        {
          name: '【清仓】53°黄金酱（红10酱）250ml',
          img:
            'http://img06.jiuxian.com/2018/0122/5f5649ddf9084369b8cd675d11f5cb114.jpg',
          price: '￥99',
          a: '点击购买'
        },
        {
          name: '【清仓】42°潘掌柜劲爽150ml',
          img:
            'http://img10.jiuxian.com/2016/0527/6afd250f78c74a848f107347cba9b3724.jpg',
          price: '￥9',
          a: '点击购买'
        },
        {
          name: '52°沱牌贵宾500ml（2014年份）',
          img:
            'http://img06.jiuxian.com/2014/1029/30da62dbd53c40eb88566c9c5ff2d8b54.jpg',
          price: '￥199',
          a: '点击购买'
        },
        {
          name: '【清仓】美国（原瓶进口）乐美堡赤霞珠红葡萄酒750ml',
          img:
            'http://img08.jiuxian.com/2016/0612/3e4d444a02304fba8161ba4fc14213be4.jpg',
          price: '￥79',
          a: '点击购买'
        },
        {
          name: '【清仓】52°泸州老窖泸州原浆蓝色8 500ml（2014年）',
          adText: '热卖好酒，低价实惠',
          img:
            'http://img10.jiuxian.com/2019/0314/b2c04f65397948ba8f64b7b2efc745824.jpg',
          price: '￥59',
          a: '点击购买'
        },
        {
          name: '【清仓】法国红酒法国小美人鱼干红葡萄酒750ml',
          adText: '1.美人鱼酒庄出品 2.果香清香馥郁，纯正恬然，入口圆润细滑。',
          img: 'http://img09.jiuxian.com/2016/0801/76792fee853d4215b476995dfa25f4f64.jpg',
          price: '￥199',
          a: '点击购买'
        },
        {
          name: '【老酒特卖】52°茅台集团龙腾九州藏品1500ml（2014-2015年）双瓶套',
          img: 'http://img08.jiuxian.com/2018/0615/9c89213976b2455f91f97b6b82803e844.jpg',
          price: '￥336',
          a: '点击购买'
        },
        {
          name: '【清仓】38°河套醉香500ml（2012年老酒）',
          img: 'http://img10.jiuxian.com/2013/1002/80ec5c6dc4114f9dab5952dc888537f04.jpg',
          price: '￥29',
          a: '点击购买'
        },
        {
          name: '【清仓】52°五粮液股份天贝春高档喜酒500ml(2014年)',
          adText: '五粮液喜酒，喜宴佳选！',
          img:
            'http://img09.jiuxian.com/2014/0825/b283c78d952c48bbbaf26a2b6c72b57e4.jpg',
          price: '￥79',
          a: '点击购买'
        },
        {
          name: '【清仓】法国圣得利·巴斯堂干红葡萄酒750ml',
          img:
            'http://img06.jiuxian.com/2016/0705/558619f95347450ca01ded136aceef894.jpg',
          price: '￥360',
          a: '点击购买'
        },
        {
          name: '【清仓】52°五粮液感恩优酿500ml(2014年)',
          img:
            'http://img08.jiuxian.com/2013/1002/1b9a50abe96140b8b263a266b09c08244.jpg',
          price: '￥109',
          a: '点击购买'
        },
        {
          name: '西班牙斯巴达帝国750ml',
          adText: '在橡木桶中熟成至少12个月，加上瓶中熟成共24个月以上的佳酿',
          img:
            'http://img06.jiuxian.com/2017/0908/2ccba1c415cc4cac91644f1259ee19c44.jpg',
          price: '￥399',
          a: '点击购买'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content > img {
  width: 100%;
  height: 140px;
}
.wine {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.wine > ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.wine > ul > li {
  display: inline-block;
  width: 340px;
  height: 550px;
  background: #ffffff;
  margin-bottom: 20px;
}
.wine > ul > li > a > img {
  width: 80%;
  height: 330px;
  display: block
}
.wine > ul > li > a > p {
  text-align: center;
  width: 300px;
  height: 60px;
  overflow: hidden;
  display: block;
}
.text {
  color: #fc0000;
  width: auto;
  height: 42px;
  line-height: 42px;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.btm {
  width: 100%;
  height: 64px;
  display: inline-block;
  margin-top: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.btm > span {
  display: inline-block;
  width: 120px;
  font-size: 32px;
  color: red;
  font-weight: 800;
  margin-left: 20px;
}
.btm > a {
  display: inline-block;
  margin-right: 20px;
  width: 128px;
  height: 52px;
  border-radius: 10px;
  background: red;
  color: #ffffff;
  line-height: 52px;
  text-align: center;
}
</style>
