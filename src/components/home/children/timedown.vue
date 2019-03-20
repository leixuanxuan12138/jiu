<template>
<div class = "timedown">
  <i><img src="https://img09.jiuxian.com/bill/2018/0131/dc91033804f74f8c82bd8feec19ac915.jpg" alt=""></i>
  <swiper :options="swiperOption"  class="box">
    <swiper-slide v-for="(slides, index) in swiperSlides" :key="index" class = "box1">
      {{slides}}
    </swiper-slide>
  </swiper>
</div>

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
        delay: 1000,
        slidesPerView: 'auto',
        freeMode: true,
        direction: 'vertical',
        loop: true
      },
      swiperSlides: [ '酒仙网线下实体火爆招商中',
        '国礼酱香 限时买一送一再送一',
        'APP首单满100送100活动规则 点击查看!',
        '酒仙网线下实体火爆招商中',
        '国礼酱香 限时买一送一再送一'
      ]
    }
  },
  mounted () {

  }
}
</script>
<style scoped>
.timedown{
  height: 70px;
  display: flex;
  justify-content: space-around;
  padding-left: 10px;
  align-items: center
}
i{
  width: 166px;
  height: 32px;
  margin: 0 30px
}
i img{
  width: 100%
}
.box{
  width:auto;
  height: 28px;
  overflow: hidden;
}
.box1{
  width: 100%;
  overflow: hidden;
}
</style>
