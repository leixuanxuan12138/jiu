<template>
    <div class="con">
        <i><img src="../images/buycart.png" alt=""></i>
        <p>购物车还是空的</p>
        <span>快去逛逛吧~</span>
        <a href="">促销活动</a>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.con{
    width: 100%;
    height: 380px;
    margin: 200px 0;
    text-align: center;
    color: #666;

}
.con>i{
    width: 124px;
    height: 124px;
    display: block;
    background-color: #ccc;
    margin: 20px auto;
    border-radius: 50%;

}
.con>i>img{
    width: 75px;
    height: 75px;
    padding-top: 28px;
}
.con>p{
    width: 100%;
    height: 40px;
    text-align: center;
    display: block;
    /* line-height: 40px; */
    margin: 10px 0;

}
.con>span{
    width: 100%;
    height: 40px;
    text-align: center;
    display: block;
    /* line-height: 40px; */
    margin: 10px 0;
    color: #b2b2a8
}
.con>a{
    width: 140px;
    height: 52px;
    display: block;
    border: 2px solid #ccc;
    border-radius: 15px;
    color: #666;
    margin: 40px auto;
    text-align: center;
    line-height: 52px;
}
</style>
