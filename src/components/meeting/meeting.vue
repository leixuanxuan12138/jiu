<template>
  <div>
    <top></top>
    <times></times>
    <imgs></imgs>
  </div>
</template>
<script>
import top from './children/top.vue'
import times from './children/time.vue'
import imgs from './children/imgs.vue'
export default {
  components: {
    top,
    times,
    imgs
  }
}
</script>
