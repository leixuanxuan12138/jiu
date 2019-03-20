<template>
  <div>
    <top></top>
    <model></model>
  </div>
</template>
<script>
import top from './children/top.vue'
import model from './children/model.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    top,
    model
  }
}
</script>
<style scoped>

</style>
