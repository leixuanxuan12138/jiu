<template>
  <div>
   <top></top>
   <topbar></topbar>
   <classs></classs>
  </div>
</template>
<script>
import top from './children/top.vue'
import classs from './children/classs.vue'
import topbar from './children/topbar.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    top,
    topbar,
    classs
  }
}
</script>
<style scoped>

</style>
