<template>
  <div class = "box">
    <div class="top">
      <p :class="{red:isRed}" @click="redF">账号登录</p>
      <p :class="{red:toRed}" @click="redT">手机动态密码登录</p>
    </div>
    <!-- 手机登录 -->
   <div id = "adm" ref="adm" >
     <i class = "icon-wode1 iconfont"></i>
     <input type="text" placeholder="用户名/账号/邮箱">
   </div>
   <div id="psd" ref="psd">
     <i class="icon-suo iconfont"></i>
     <input type="password" placeholder="密码">
   </div>
   <div id="code" ref="code">
     <i><img src= 'https://mlogin.jiuxian.com/captchaimg1?t=1553061025504' alt="" ref="img1"></i>
     <i class="icon-shuaxin iconfont new" @click="goNew"></i>
   </div>
   <!-- 手机登陆 -->
   <div id = "modeladm" ref="modeladm">
     <div>
      <i class = "icon-shouji iconfont"></i>
      <input type="text" placeholder="请输入手机号新用户将自动注册" @change="yesNo">
     </div>
     <span></span>
   </div>
   <div id = "code" ref="code1">
    <i><img src= 'https://mlogin.jiuxian.com/captchaimg1?t=1553061025504' alt="" ref="img2"></i>
     <i class="icon-shuaxin iconfont new" @click="goNew"></i>
   </div>
   <div id="co" ref="co">
     <div class="co">
       <input type="text" placeholder="请输入验证码" class = "inp1">
      <button class="giveCode">获取验证码</button>
     </div>
     <span></span>
   </div>

   <!-- ------------ -->
   <input type="button" value="立即登陆" class="btn">
   <div class = "mid">
     <span>免费注册</span>
     <span>找回密码</span>
   </div>
   <div class="btm">
     <p></p>
     <h6>合作伙伴登录</h6>
   </div>
   <div class="logo">
     <i class="icon-QQ iconfont"></i>
     <i class="icon-big-Pay iconfont"></i>
   </div>
  </div>
</template>
<script>
import '../css/model.css'
export default {
  data () {
    return {
      imgurl: 'https://mlogin.jiuxian.com/captchaimg1?t=1553061025504',
      isRed: true,
      toRed: false
    }
  },
  mounted () {
    this.$refs.modeladm.style.display = 'none'
    this.$refs.code1.style.display = 'none'
    this.$refs.co.style.display = 'none'
  },
  methods: {
    goNew () {
      this.$refs.img1.src = this.imgurl
      this.$refs.img2.src = this.imgurl
    },
    yesNo () {

    },
    redT () {
      this.isRed = false
      this.toRed = true
      this.$refs.adm.style.display = 'none'
      this.$refs.psd.style.display = 'none'
      this.$refs.code.style.display = 'none'
      this.$refs.modeladm.style.display = 'flex'
      this.$refs.code1.style.display = 'flex'
      this.$refs.co.style.display = 'flex'
    },
    redF () {
      this.isRed = true
      this.toRed = false
      this.$refs.adm.style.display = 'flex'
      this.$refs.psd.style.display = 'flex'
      this.$refs.code.style.display = 'flex'
      this.$refs.modeladm.style.display = 'none'
      this.$refs.code1.style.display = 'none'
      this.$refs.co.style.display = 'none'
    }
  }
}
</script>
<style scoped>

#co .co{
  display: flex;
  justify-content: space-between;
   margin-bottom: 50px;
   width: 100%
}
#co .co .inp1{
  width: 340px;
  height: 80px;
  border: 1px solid #cccccc;
  font-size: 28px;
  padding-left:20px;
  border-radius: 15px
}
#co .co .giveCode{
display: block;
cursor: pointer;
width: 200px;
height: 80px;
background: #de4943;
color: white;
text-align: center;
line-height: 80px
}
#modeladm{
  border-radius: 10px;
  width: auto;
  height: 84px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  padding: 0 0 0 30px ;
  margin-bottom: 50px;
}
#modeladm i{
    font-size: 40px;
    color: #cccccc;
    margin-right: 30px
}
#modeladm input{
  font-size: 28px;
  width:500px
}
.none{
  display: none
}
.red{
  color: #de4943;
  border-bottom: 4px solid #de4943
}
.logo{
   width: auto;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 50px;
}
.logo i{
  font-size: 70px;
   border-radius: 50%;
   text-align: center;
   line-height: 80px;
   width: 80px;
   height: 80px;
   display: block;
   overflow: hidden;
}
.logo  .icon-QQ{
  color: steelblue
}
.logo .icon-big-Pay{
  color:orange;

}
.btm{
  width: 100%;
  height: 80px;
  position: relative;
  margin-bottom: 50px;
}
.btm p{
width: 100%;
height: 1px;
background: #878686;
position: absolute;
top: 50%;
left: 0;
}
.btm h6{
  width: 220px;
  margin: 0 auto;
  height: 80px;
  color: #878686;
  background: white;
  font-size: 28px;
  position: absolute;
  line-height: 80px;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0
}
.mid{
color: #666;
font-size: 28px;
display: flex;
justify-content: space-between;
text-decoration: underline;
margin-bottom: 50px;
}
.btn{
  width: 100%;
  height: 68px;
  background: #de4943;
  border-radius: 10px;
  font-size: 28px;
  color: white;
  margin-bottom: 50px;
}
#code{
 width: auto;
  height: 84px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 50px;
}
#code img{
  width: 450px;
  height: 60px;
  display: block
}
#code .new{
  font-size: 50px;
  color: #cccccc;
  margin-right: 20px
}
#adm{
  border-radius: 10px;
  width: auto;
  height: 84px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 50px;
}
#adm i{
    font-size: 40px;
    color: #cccccc;
    margin-right: 30px
}
#adm input{
  font-size: 28px;
}
#psd{
  width: auto;
  border-radius: 10px;
  height: 84px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 50px;
}
#psd i{
    font-size: 40px;
    color: #cccccc;
    margin-right: 30px
}
#psd input{
  font-size: 28px;
}
input{
border:0 none; resize:none
}
.box{
  padding: 50px 50px 0 50px;
}
.top{
  color: #626365;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 28px;
}
</style>
