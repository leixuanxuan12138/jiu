<template>
  <div>
    <span v-for="(item,index) in lis" :key="index">
      <img :src="item" alt="">
    </span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lis: [
        'https://img06.jiuxian.com/bill/2019/0319/40f6785a10984625b88615a6b98c160f.jpg',
        'https://img10.jiuxian.com/bill/2019/0315/6128d597c5ce442687b2a4ea9176e302.jpg',
        'https://img08.jiuxian.com/bill/2019/0319/ced58b2c0e664038b6a362bf3834ad12.jpg',
        'https://img06.jiuxian.com/bill/2019/0312/aa5e452b8c8749b7a4e11a01fb643902.jpg'
      ]
    }
  }
}
</script>
<style scoped>
div{
  margin-bottom: 90px
}
span{
  width: 100%
}
img{
  width: 100%;
  height: auto
}
</style>
