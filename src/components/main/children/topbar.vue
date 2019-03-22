<template>
  <div class="box">
  <img class="img1" :src="imgurl[i].img1" alt="">
  <span>
     <img class="img2" :src="imgurl[i].img2" alt="">
  <img class="img3" :src="imgurl[i].img3" alt="">
  </span>
  </div>
</template>
<script>
export default {
  created () {
    this.i = this.$route.params.id
  },
  data () {
    return {
      imgurl: [

        {
          img1: 'https://img10.jiuxian.com/bill/2018/1102/8e410c52cd084bdba1b59642a013fb0f.jpg',
          img2: 'https://img07.jiuxian.com/bill/2019/0201/07593b5a1c164295a00ff3b1a35aea6b.jpg',
          img3: 'https://img08.jiuxian.com/bill/2018/0913/e381afd7380d40cd80e601a5ba413e89.jpg'
        },
        {
          img1: 'https://img08.jiuxian.com/bill/2018/0817/1986b24a588f4d238fbb28186dcb3114.jpg',
          img2: 'https://img07.jiuxian.com/bill/2017/0321/eb4c91b85f9b462cac6262103752e952.jpg',
          img3: 'https://img08.jiuxian.com/bill/2017/0215/2ba4508589514badba2d7482a2cd7d5c.jpg'
        }

      ]
    }
  }
}
</script>
<style scoped>
.box{
  display: flex;
  padding: 20px;
}

.img1{
  display: inline-block;
  width: 426px;
  height: 355px;
}
.img2{
  width: 284px;
  height: 177px;
  display: block;
}
.img3{
  display: block;
  width: 284px;
  height: 177px;
}
</style>
