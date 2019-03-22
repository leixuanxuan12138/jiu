<template>
  <div>
    <top></top>
    <topbar></topbar>
    <classify></classify>
    <content1></content1>
  </div>
</template>

<script>
import topbar from './children/topbar.vue'
import top from './children/top.vue'
import classify from './children/classify.vue'
import content1 from './children/content.vue'
export default {
  components: {
    topbar,
    top,
    classify,
    content1
  }
}
</script>
<style scoped>

</style>
