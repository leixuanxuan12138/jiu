<template>
  <div ref= "home">
    <bottombar></bottombar>
    <topbar></topbar>
    <slider></slider>
    <groom></groom>
    <timedown></timedown>
    <countTime></countTime>
    <goLeft></goLeft>
    <soMany></soMany>
    <router-view></router-view>
    <click></click>
    <i class = "iconfont  icon-upward goTop" v-show="isshow" @click="back"></i>
  </div>
</template>
<script>
import topbar from './children/topbar'
import bottombar from './children/bottombar'
import slider from './children/slider'
import groom from './children/groom'
import timedown from './children/timedown'
import countTime from './children/time'
import goLeft from './children/goLeft'
import soMany from './children/soMany'
import click from './children/click'
export default {
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    back () {
      window.scrollTo(0, 0)
    }
  },
  components: {
    topbar,
    click,
    bottombar,
    slider,
    groom,
    timedown,
    countTime,
    goLeft,
    soMany
  },
  created () {

  },
  mounted () {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 300) {
        this.isshow = true
      } else {
        this.isshow = false
      }
    })
  }
}
</script>
<style scoped>
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1081818_owqcg4u9sgs.eot?t=1553043674461'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1081818_owqcg4u9sgs.eot?t=1553043674461#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALQAAsAAAAABpAAAAKBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBHIEdATYCJAMICwYABCAFhG0HMBvDBcgekiRFQYR5DnidACAL8fD9fum570OAUa4LoAZU0VGxJDcKqOwrOzWmrkJ3Op6NyP+ttX+I6SDxzhtiVnf37v6s+OzgXk8qoRFpEAqECIlHI5KBDThIIGBceADKgGvqJ9CD5AHNrZOikiMBJzjALhyNbAMZgG8Yu+AFPiZQb5ifb3tqYQOK5OxVgThXZQmKClG5nBVqhbLhYA7xFgq16T7nHXgTfT/+i0YRSIoM7Ja9s8kkjPzqdEo4+686DQiIEdDxAhkWgZw4aszuyBWMy1WfzTMOjtUY/OqswCOO+ueJEuz6RjAIc8GvTk/zqPUJ5Em+AixhNr8xtfYeVj1kwneebah+TFNNna+xQJVu+VSP6bMvD9007yxVXzJkW34y9fD1pme4Z/q7YLeg3dNE6fbH2GqBNLSh5QWrsbfXa6Hx9unzr6r+Bxluddv1Pn8m+K6bS0LlwF9RQx7Aj5f/jJa8VnPIqkDtKXzBr1IPHMoNre1OuaZu9CeVSSsT6tXjFQ62+5pq67qvYqjVdXf+GkMZMrUmyZxdRKFBBaVaa6i3YPp4gw5MrsiLgXnXAKHVM5Jm35Bp9UHm7CcK3X5Rao1c1DuJ2gsbTIdaMs5Q4pgk8X2iJmyLul5eEjeuobxtSCyvjfgtZJ6aIJFguFyYRgvZElu8HTnKOSWU2SaZAs+hYdjEYbaGCR5UOHf6QiHa9KZgwjahxBYGSTiURMTtI1QJNgsNJnMllc+vQbJtBgnraKsrbkGMR52eiAgKDyCnTdagtkd5xbNDFsVxFEExNhMxBeYhg8FGOM3zNCiBC1ImpB19Qs44OtQU3N5i/kAl68K2p3Bm5UJ54exKLAkAAAAA') format('woff2'),
  url('//at.alicdn.com/t/font_1081818_owqcg4u9sgs.woff?t=1553043674461') format('woff'),
  url('//at.alicdn.com/t/font_1081818_owqcg4u9sgs.ttf?t=1553043674461') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1081818_owqcg4u9sgs.svg?t=1553043674461#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-upward:before {
  content: "\e61f";
}
.goTop{
  position: fixed;
  top: 80%;
  left: 80%;
  z-index: 110;
  font-size: 40px;
  border: 1px solid #666666;
  border-radius: 50%;
  display: block;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #666666;
  background: white
}
</style>
