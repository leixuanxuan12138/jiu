<template>
  <div>
    <top></top>
    <topbar></topbar>
    <classify></classify>
  </div>
</template>

<script>
import topbar from './children/topbar.vue'
import top from './children/top.vue'
import classify from './children/classify.vue'
export default {
  components: {
    topbar,
    top,
    classify
  }
}
</script>
<style scoped>

</style>
