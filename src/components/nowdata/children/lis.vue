<template>
  <div>
    <ul>
      <li v-for="(item,index) in lis" :key="index" @click="change(index)">
        <p :class="{color:index===num}">{{item.name}}</p>
        <img :src="item.img" alt="">
      </li>
    </ul>
    <div class = "data">
      <div v-for="(items,indexx) in datas[number][num]" :key="indexx" class="box">
        <span><img :src="items.imgurl" alt=""></span>
        <div>
          <h6>{{items.name}}</h6>
          <p><em class="em1">{{items.em1}}</em><em class="em2">{{items.em2}}</em><em class="em3">{{items.em3}}</em></p>
          <h5>{{items.prcie}}</h5>
          <div class="np">
            <span>{{items.pl}}</span>
            <p>{{items.persons}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    change (i) {
      this.num = i
    }
  },
  data () {
    return {
      number: '',
      num: 0,
      lis: [
        {
          name: '综合',
          img: ''
        },
        {
          name: '销量',
          img: ''
        },
        {
          name: '价格',
          img: '../img/up.png'
        },
        {
          name: '筛选',
          img: ''
        }
      ],
      datas: [
        [
          [
            {
              imgurl: 'https://img09.jiuxian.com/2018/0608/96b5a8fb57f74618abb59b21e45e065e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img09.jiuxian.com/2018/0608/96b5a8fb57f74618abb59b21e45e065e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img09.jiuxian.com/2018/0608/96b5a8fb57f74618abb59b21e45e065e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img09.jiuxian.com/2018/0608/96b5a8fb57f74618abb59b21e45e065e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img09.jiuxian.com/2018/0608/96b5a8fb57f74618abb59b21e45e065e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img09.jiuxian.com/2018/0608/96b5a8fb57f74618abb59b21e45e065e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img09.jiuxian.com/2018/0608/96b5a8fb57f74618abb59b21e45e065e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img09.jiuxian.com/2018/0608/96b5a8fb57f74618abb59b21e45e065e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            }
          ],
          [
            {
              imgurl: 'https://img10.jiuxian.com/2019/0314/b2c04f65397948ba8f64b7b2efc745822.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2019/0314/b2c04f65397948ba8f64b7b2efc745822.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2019/0314/b2c04f65397948ba8f64b7b2efc745822.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2019/0314/b2c04f65397948ba8f64b7b2efc745822.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2019/0314/b2c04f65397948ba8f64b7b2efc745822.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2019/0314/b2c04f65397948ba8f64b7b2efc745822.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2019/0314/b2c04f65397948ba8f64b7b2efc745822.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2019/0314/b2c04f65397948ba8f64b7b2efc745822.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            }
          ]
        ],
        [
          [
            {
              imgurl: 'https://img10.jiuxian.com/2017/0601/76d91ff41241457e8b74788140eac3be2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2017/0601/76d91ff41241457e8b74788140eac3be2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2017/0601/76d91ff41241457e8b74788140eac3be2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2017/0601/76d91ff41241457e8b74788140eac3be2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2017/0601/76d91ff41241457e8b74788140eac3be2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2017/0601/76d91ff41241457e8b74788140eac3be2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2017/0601/76d91ff41241457e8b74788140eac3be2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img10.jiuxian.com/2017/0601/76d91ff41241457e8b74788140eac3be2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            }
          ],
          [
            {
              imgurl: 'https://img08.jiuxian.com/2017/0828/b489b3441f8345d0a72df7acba73583e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img08.jiuxian.com/2017/0828/b489b3441f8345d0a72df7acba73583e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img08.jiuxian.com/2017/0828/b489b3441f8345d0a72df7acba73583e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img08.jiuxian.com/2017/0828/b489b3441f8345d0a72df7acba73583e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img08.jiuxian.com/2017/0828/b489b3441f8345d0a72df7acba73583e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img08.jiuxian.com/2017/0828/b489b3441f8345d0a72df7acba73583e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img08.jiuxian.com/2017/0828/b489b3441f8345d0a72df7acba73583e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            },
            {
              imgurl: 'https://img08.jiuxian.com/2017/0828/b489b3441f8345d0a72df7acba73583e2.jpg',
              name: '52°西凤窖酒伍号500ml',
              em1: '金币优惠',
              em2: '订单加价购',
              em3: '限时抢购',
              prcie: '￥59.00',
              pl: ' 100  % 好评',
              persons: ' 2710  人评论'
            }
          ]
        ]
      ]
    }
  },
  created () {
    this.number = this.$route.params.id
  }
}
</script>
<style scoped>
.np{
      color: #aaa;
    font-size: 24px;
    white-space: nowrap;
    display: flex
}
.np span{
  margin-right: 20px
}
h5{
  font-size: 30px;
    color: #fc5a5a;
    margin-top: 50px
}
.em1{
      background-color: #efa35b;
          font-size: 20px;
    display: inline-block;
    padding: 0 4px;
    color: #fff;
    height: 28px;
    line-height: 28px;
    border-radius: 4px;
    margin-left: 10px;
    overflow: hidden;
}
.em3{
      background-color: #efa35b;
          font-size: 20px;
    display: inline-block;
    padding: 0 4px;
    color: #fff;
    height: 28px;
    line-height: 28px;
    border-radius: 4px;
    margin-left: 10px;
    overflow: hidden;
}
.em2{
      font-size: 20px;
    display: inline-block;
    padding: 0 2px;
    color: #fff;
    height: 28px;
    line-height: 28px;
    border-radius: 4px;
    margin-left: 10px;
    overflow: hidden;
    background-color: #ff8b58;
}
.data{
  padding: 20px
}
.data .box{
  display: flex
}
.data .box div h6{
    line-height: 36px;
    color: #000000;
    font-size: 28px;
}
.color{
 color: #fc5a5a
}
ul{
  display: flex
}
li{
  width: 25%;
  text-align: center;
  height: 80px;
  line-height: 80px;
  font-size: 28px;
  color: #252525;
}
img{
  display: block;
  width: 220px;
  height: 220px;
}
</style>
