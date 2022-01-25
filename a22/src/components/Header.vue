<template>
<div>
  <div class="header_topp mid">
    <div class="header_logo mid">
      <img src="../assets/images/1logo.c4b29e1c.png" class="header_left left">
      <div class="header_right right">
<!--        <ul v-if="gettoken ===false">-->
        <ul>
          <li class="font_size">
            <a href="/creat">注册</a>
          </li>
          <li class="divide_line">
            <a>|</a>
          </li>
          <li class="exit">
            <a href="/login">登录</a>
          </li>
        </ul>
<!--        <ul v-else>-->
<!--          <li class="font_size">-->
<!--            <a>退出登录</a>-->
<!--          </li>-->
<!--        </ul>-->
      </div>
    </div>

  </div>
  <div class="line"></div>
  <div id="parm" >
  <div class="nav mid">
    <div class="nav_left left">
      <ul>
        <li>
          <a href="/index">我的首页</a>
        </li>
        <li>
          <a href="/zhanshi">我的信息</a>
        </li>
        <li>
          <a href="/zhanshi">商城</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import Detail from "./detail";

export default {
  name: "Header",
  components: {Detail},
  methods: {
    gettoken() {
      let token=sessionStorage.getItem("token");
      if (!token) return false
      else return true
    }
  }
}
</script>

<style scoped>
#parm{
  background-color: white;
  width: 100%;
  min-width:1200px;
}
</style>