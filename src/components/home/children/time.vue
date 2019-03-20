<template>
  <div class = "times">
    <h3>掌上秒拍</h3>

    <div class="box">
      <p  class = "sp1">距结束</p>
      <span>{{arr.hour}}</span>:
      <span>{{arr.minute}}</span>:
      <span>{{arr.seconds}}</span>
    </div>
    <div class = "last">
      <p>更多商品等你来抢!</p>
    <i class="iconfont icon-rightarrow"></i>
    </div>
  </div>
</template>
<script>
import getTime from '../js/getTime.js'
export default {
  data () {
    return {
      arr: {
        hour: '',
        minute: '',
        seconds: ''
      }
    }
  },
  created () {
    setInterval(() => {
      this.arr = getTime('2019/03/20 9:00')
    }, 1000)
  }
}
</script>
<style scoped>
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1081818_xj715rgry4.eot?t=1552972497932'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1081818_xj715rgry4.eot?t=1552972497932#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAOwAAsAAAAACDgAAANkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDSIMKATYCJAMUCwwABCAFhG0HVxslBxEVnKvIvjgwTz51gaUjbLgqie34i/i1ybehY3rucwTRfq+zd/fofoAVqKjky0jg1lbVqLJFUK2RdRWGhEJXlkBC54f95fu4GQ1ig+PHQKVj2zUpLSHBOLANbmsKANhN9JuboX6pFzJCsSTneT99RzqBcGn643+OmS6tbZjftnaJLItKnM5G+XxvYHlRSXZnR3eifMPYlRdxNYFq1VgcFZQR0CuMnQJxrqOtAfqUVakpDb3QlhxZIp4CQ58eoxcAnvjfH38hKexImszY80xrfjPsPcFTOsb+Z6faRYBsPDfYcWSMUYgrpd5zkMP4WFaVvyv2gKqXpB/wFPaU+JT+/68qd6Sv5j88iiwJomUUT4A9lCj8AFsa68Igi8yPRBaJH+nye7lSAyoGXAVegIFbxpOFLA0/Pu/p5LTkVLWwwd7kb3O2moK7tLVJOdMTXs0iEVvs3SLmz3B8uiReXiJvksBn9Bb70lJfX6lPpeaB0D6S+mda9zRuqSkkTooKztG3rUd0OkqjIbRakq/PJqfGM0f1KmS9ns7XaAQ3btY8c0AJhC6oYxl7yP2T/GUCQT7TYTVfJku9RbK/HDaqiGYrRR0cXF7mF1ibm29u3NwtFCX9MxoQgBuxOSDAUcYVzpOaE9yhFkg+cXBQwv19+GnDunNQ9c21ClNj19fwDqrrGzWa0x3yZbVC7FwMgt/mYbOzKBflUTWPiiAF42FcH7SDsTS/Ru4ATvb7hqX7yZXtYUX/9Hc8+8pqqXPd+u4dC/i4pLyFdSdsId8C+DE6rWV/cB6eoXCFYWuK3GF7M/K6xoYMEhup+G/BOd/H8S8Su0PPZRCSzgpkvTVkwY6hMbIJrd4uVBtOHz8y7wpkUQasuw8gzHgOyZTXkM14gyzYb9BY8h9aM4FBdRaZP+OIIyziJZdRCVrQf4iGNmc55BKU3tHXRXFS4VPfyCWGYGj7bOqGG/IY+5SPH0UcOKYVZnA9XBaCnSmhkTaI7FPXubJPag2tzUUuoxK0QP9BNLQ5d7hccl9/R18XxTU9FeE3comLg0Grb4G8abdWPdfynPLxIxEHHNMKZuDGxYwT2MvXJTTSCj2i+6RD/VxbbTu/fn3GM1AZN2iiDDk++HlivB7/g1JUm1AdLhx9EMVM38MQ1VKpaQA=') format('woff2'),
  url('//at.alicdn.com/t/font_1081818_xj715rgry4.woff?t=1552972497932') format('woff'),
  url('//at.alicdn.com/t/font_1081818_xj715rgry4.ttf?t=1552972497932') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1081818_xj715rgry4.svg?t=1552972497932#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-rightarrow:before {
  content: "\e626";
}

h3{
  color:#858585;
  font-family: "黑体";
  font-weight: 800;
  font-size: 28px
}
.sp1{
color: #666666;
font-size: 24px
}
.box{
  display: flex;
  justify-content:flex-start
}
.last{
  display: flex;
  justify-content: center;
  align-items: center
}
.box span{
width: 32px;height: 32px;
background: #858585;
color: white;
border-radius: 5px;
margin: 0 4px;
text-align: center
}
.times{
display: flex;
justify-content: space-around;
align-items: center
}
p{
  color:#666666
}
.iconfont{
  font-size: 26px;
  background: #858585;
  color:white;
  border-radius: 50%;
  height: 25.6px;
  margin-left:10px
}

</style>
