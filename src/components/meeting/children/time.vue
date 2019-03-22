<template>
  <div>
    距离活动结束还剩<span>{{obj.hour}}</span>小时<span>{{obj.minute}}</span>分钟<span>{{obj.seconds}}</span>秒
  </div>
</template>
<script>
import getTime from '../js/getTime.js'
import { setInterval } from 'timers'
export default {
  data () {
    return {
      obj: {
        hour: '',
        minute: '',
        seconds: ''
      }
    }
  },
  created () {
    setInterval(() => {
      this.obj = getTime('2019/03/22 09:00')
    }, 1000)
  }
}
</script>
<style scoped>
div{
  display: flex;
  justify-content: center;
  height: 65px;
  background: #ffd101;
  color: #df010e;
  font-size: 26px;
  align-items: center;
  line-height: 65px;
}
span{
  width: 44px;
  height: 40px;
    line-height: 40px;
    text-align: center;
    font-family: Impact;
    font-style: normal;
    letter-spacing: 0;
    font-size: 32px;
    color: #ffd101;
    background: #480094
}
</style>
