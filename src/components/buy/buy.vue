<template>
  <div class="buy">
    <top1></top1>
    <nav1></nav1>
    <conter></conter>
  </div>
</template>
<script>
import top1 from './components/top'
import nav1 from './components/nav1'
import conter from './components/conter'
export default {
  data () {
    return {

    }
  },
  components: {
    top1,
    nav1,
    conter
  }
}
</script>
<style scoped>
.buy{
  width: 100%;
  background-color:#f3f5f6;
  color: #333;
  height: 100%;
}
</style>
