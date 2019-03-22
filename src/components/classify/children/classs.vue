<template>
  <div>
    <ul>
      <li v-for="(item,index) in lis" :key="index" @click="change(index)">
        <i :class="{iconfont:true,'icon-jiulei':true}"></i>
        <p>{{item}}</p>
      </li>
      <!-- <li>
        <i class = "iconfont icon-icon--"></i>
        <p>葡萄酒</p>
      </li>
      <li>
        <i class = "icon-jiubei iconfont"></i>
        <p>洋酒</p>
      </li>
      <li>
        <i class="icon-boxxiangzi iconfont"></i>
        <p>整箱购</p>
      </li>
      <li>
        <i class = "icon-75 iconfont"></i>
        <p>老酒</p>
      </li> -->
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lis: [
        '白酒', '葡萄酒', '洋酒', '老酒', '啤酒'
      ]
    }
  },
  methods: {
    change (i) {
      this.$router.push('/nowdata/' + i)
    }
  }
}
</script>
<style scoped>
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1094157_6djt34ktncy.eot?t=1553219642067'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1094157_6djt34ktncy.eot?t=1553219642067#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1094157_6djt34ktncy.woff?t=1553219642067') format('woff'),
  url('//at.alicdn.com/t/font_1094157_6djt34ktncy.ttf?t=1553219642067') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1094157_6djt34ktncy.svg?t=1553219642067#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 60px;
  margin-bottom: 10px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-75:before {
  content: "\e668";
}

.icon-boxxiangzi:before {
  content: "\e730";
}

.icon-jiubei:before {
  content: "\e617";
}

.icon-icon--:before {
  content: "\e739";
}

.icon-jiulei:before {
  content: "\e60d";
}
ul{
  display: flex;
  flex-wrap: wrap;
}
li{
  width: 240px;
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 30px;
  color: #333
}
</style>
