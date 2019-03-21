<template>
    <div class="mark">
        <i><img src="../images/mark.png" alt=""></i>
        <span>自营商品实付满100元免运费，偏远地区满500免运费</span>
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
.mark{
    color: red;
    width: 100%;
    height: 44px;
    margin: 0 auto;
    background: #fff4e2;
    font-size: 0.05rem;

}
.mark>span{
    height: 28px;
    width: 580px;
    display: block;
    text-align: center;
    line-height: 44px;
    float: left;
}
.mark>i{
    width:30px;
    height: 30px;
    display: inline-block;
    float: left;
    margin: 10px 0 0 20px
}
.mark>i>img{
    width: 26px;
    height: 26px;
}
</style>
