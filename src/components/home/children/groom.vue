<template>
  <div class = "groom">
    <span @click="go(index)" v-for="(item,index) in imgUrl" :key="index"><img :src="item" alt=""></span>
    <img src="https://img07.jiuxian.com/bill/2019/0318/4418156f9de34e7e9ec47e43be0dff70.jpg" alt="">
    <img src="https://img07.jiuxian.com/bill/2019/0318/61f5e781d1f941a3bcdcf228cb183e1d.jpg" alt="" class = "img1">
    <img src="https://img06.jiuxian.com/bill/2019/0318/344fd5fb460c471eaf78f179e5677ac4.jpg" alt="" class = "img1">
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: [
        'https://img09.jiuxian.com/bill/2019/0316/620b81a1a146446f950aa0c600389906.jpg',
        'https://img08.jiuxian.com/bill/2019/0316/495ada6314694d42972f5e5e13cd440b.jpg',
        'https://img10.jiuxian.com/bill/2019/0316/d53c1da7ebb54d91b40a81804db0709e.jpg',
        'https://img08.jiuxian.com/bill/2019/0316/ce6f8389f9914d2cbecbbe56d51022a4.jpg',
        'https://img09.jiuxian.com/bill/2019/0316/ba8998a807094302ad218df8181d6435.jpg',
        'https://img06.jiuxian.com/bill/2019/0316/ca43f08058e74128a0a773c8f36040c0.jpg',
        'https://img08.jiuxian.com/bill/2019/0316/991e067de9f9484ea5a4e3658c731bdd.jpg',
        'https://img06.jiuxian.com/bill/2019/0316/24ea1ea4899a4249a22d9bb2b04f62bc.jpg',
        'https://img06.jiuxian.com/bill/2019/0316/24ea1ea4899a4249a22d9bb2b04f62bc.jpg',
        'https://img09.jiuxian.com/bill/2019/0316/6854e64014e04bf59b83df95beacfb9b.jpg'
      ]
    }
  },
  created () {

  },
  methods: {
    go (i) {
      location.hash = '/main'
    }
  }
}

</script>
<style scoped>
.groom{
  display: flex;
  flex-wrap: wrap
}
.groom span{
width: 20%;/*no*/
height: auto;
display: block
}
img{
  width: 100%;
  height: 100%;
}
.img1{
  width: 50%
}
</style>
