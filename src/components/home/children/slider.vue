<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <span><img :src="slide" alt=""></span>
    </swiper-slide>
    <div class="swiper-pagination box" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        delay: 100
      },
      swiperSlides: [ 'https://img08.jiuxian.com/bill/2019/0318/8d6a1ac8d317420a9e9c0386b90e116c.jpg',
        'https://img08.jiuxian.com/bill/2019/0316/3376c85bdd5a4ab7a001720e07829ce3.jpg',
        'https://img08.jiuxian.com/bill/2019/0315/f4ac75553cfe400f83a417e9c9f6fbc3.jpg',
        'https://img09.jiuxian.com/bill/2019/0316/2801098981374a299411811df0a4e482.jpg',
        'https://img10.jiuxian.com/bill/2019/0315/d0a54a33a1ac45d9a8458517ed63c1fa.jpg',
        'https://img09.jiuxian.com/bill/2019/0316/84f01343961e4d04b3405947050a8dce.jpg',
        'https://img09.jiuxian.com/bill/2019/0316/d2979686d8204120981bd7093cd19c13.jpg',
        'https://img08.jiuxian.com/bill/2019/0312/b75f084dcdbb4145a16f078a4719d22c.jpg',
        'https://img08.jiuxian.com/bill/2019/0318/8d6a1ac8d317420a9e9c0386b90e116c.jpg',
        'https://img08.jiuxian.com/bill/2019/0316/3376c85bdd5a4ab7a001720e07829ce3.jpg'
      ]
    }
  },
  mounted () {

  }
}
</script>
<style scoped>
img{
  width: 100%
}
.box span{
  background: red
}
</style>
