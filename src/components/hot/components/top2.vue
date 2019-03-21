<template>
  <div class="click" v-show="isshow">
    <span class="iconfont icon-2guanbi" @click="close"></span>
    <span class = "span1"></span>
    <div>
      <p>打开酒仙网APP</p>
      <p>新人领198元礼包</p>
    </div>
    <a href="#">立即打开</a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isshow: true
    }
  },
  methods: {
    close () {
      this.isshow = false
    }
  }
}
</script>
<style scoped>
.click{
  display: flex;
  width: 100%;
  height: 86px;
  background:#2e2e2e;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top:0px;
  left: 0;
  z-index: 100;
}
.click div{
  color: white
}
img{
  width: 60px;
  height: 60px;
  display: block
}

.span1{
  background: url(../images/topApp.png) no-repeat 0px -40px;
  background-size: 80px;
  width: 70px;height: 70px;
  margin-left: -50px
}
a{
  color:white;
  width: 232px;
  height: 100%;
  background: #e62929;
  font-size: 28px;
  text-align: center;
  line-height: 86px;
}
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1081818_99wk854bo9c.eot?t=1552993816117'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1081818_99wk854bo9c.eot?t=1552993816117#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAUoAAsAAAAACkAAAATZAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqHWIZdATYCJAMUCwwABCAFhG0HThvvCCOS7k2E7J+HsWMiM9D1K7OzxkeWldmpM/h4Jb3Ifg6e//Zr98nMatrFtIpGsyYaVRMh/Qp+urVE43QS0UuYANjc7Mc2KkKxJPaXn76FtIQVLg3jh/LKya5njsgpe9Sz1iK7pZ5y0DopdIZbvw769o7fz9WJ1bUfZ9c27+XdxO7/uWEiIeIh02ju3RJtIUOplNhYZNceodchQJE2epDZx/w6eRwlKDDsgo53yYfieI5ayIdiyq2OPBLI65W+Aw/278s/Q5IHJRjKpctHcwdMfunXuWUp2zBFuNvLAtRdYEAP4CCXqfkLzA302FRMO9qZBIrkUbStgzq/Br7OU/J9MxKK6j88EBTDQSIKlZF8stPhS3UjBL46g8T5AYhiwJ+D58RQMG8pAhWQUeQNRWixrzYiThi20Rq31jMz1jfSg4gF1Hs5XOC0o6Max+rGxjieHBnhGM3wcPwRZxETJT6L2GJ/4nFdGJvJmWm0oVw6Y05qvjEZvKWODOGzWIuWkEIGmfobHb2jUzhgKBpHCgwNDwP46gA1l/iSihgmu7yYK62Mxdiirs1ccjgTkcKnRbGRqeSYbpcDQngqhOFW4fHgwuhf7dg/3cgfcvj3Iy2gcTB46ejfE3pcKBtmqR8Swny7KtAZ9z2YkA3jQx5DLLLWVS+52grA629MCDLkw9hQrR7GhiF9PgQcF4aGct/MBCEhfJhOyFJqIMiCp5ypT/3BkCvNjMUScQoBRGLokg3q+lm3U67v3ruedDs7oDGLeSy4+Vm3/pTLJM9bTqsVSqcnT4ljhLpCYxbzWHBztaI85Qjf5vb2NzaEdUS70hZhTdi8sdfpiF0GNtRnSYWSoGlCqSCrNGtCRVNKgnSuqqgIipIyzmQVVAglRcPhpEI8dL9YtLQkLBIWm5FiV6OLS4a/CB2qryc+5mVosMMDKHGsPkQHBQeCdxL2KkwZ0GtVjVYDrPH5oGm7IUvHgUrcuG7eabLGMW/ecTI2O0G6F2i/4xdP40tmyFrsgJuADXpc7OgoBv84IPj8Ufpf+1pFMpkI/K04gg+/TLPsJes0zfrkdaPTrNNuK1nLNumE+Pt2g6CfN+kgw8yl71WGQTRcMF+AoWjBYr4aBAWhGQTQJ+xot4QzFjMQq8xazIaTrWjefB4BFlO90jweUjAifsL8SM+aGYVmLOYRhW0jtdvBhMbwJ2DbKPgfXAcASKwDYUZqs6xHuKdrzY4Llp/e08BwllxyznDTugzdtT0fpYtWKJGYeq5HkAel3c+qu+QqF71KIjg/V3fxjYFr4EkkFXoggATlCphtR6gtPRQEGeY+KFLswJDhLHa5NwQQwRCRsRWKeIG9d5cwBbeAEMzlANAFXmKAYQTyQIABdSDECPSIRfIZEGMB5kGCESYEiBYzfSTCFcvT5SpoFEuwf6CCe6el9OIMf6EfWyNBr635oQRqhjRKot1P7FHauCJMPlN14IQ7eGBvw7ZlGIRrLDSqVIc8jl3aF0UFd6sLV0GjWIL9AxXcO3NjvcR+/oV+bI3kzCs4/lAC7R/SKCkhflJfat6xjA2TzxS1OXDUUO7ggbLYqh0MQ/pJNRYaVTXahjxG67myFPUvdMfY/aMsqLyPWFRMXIJEjkN+NL2l/Z95oWOoqCbTn1pj9VPu/WoFAAAA') format('woff2'),
  url('//at.alicdn.com/t/font_1081818_99wk854bo9c.woff?t=1552993816117') format('woff'),
  url('//at.alicdn.com/t/font_1081818_99wk854bo9c.ttf?t=1552993816117') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1081818_99wk854bo9c.svg?t=1552993816117#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-2guanbi:before {
  content: "\e602";
}
.iconfont {
  font-size: 30px;
  color: white;
  margin-left: 50px
}
</style>
