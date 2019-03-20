<template>
  <div class="buy">
    <top1></top1>
    <nav1></nav1>
    <nav2></nav2>
    <bottom1></bottom1>
  </div>

</template>
<script>
import top1 from './components/top'
import nav1 from './components/nav'
import nav2 from './components/nav2'
import bottom1 from './components/bottom'
export default {
  data () {
    return {

    }
  },
  components: {
    top1,
    nav1,
    nav2,
    bottom1
  }
}
</script>
<style scoped>
.buy{
  width: 100%;
   background: #316def;
}

</style>
