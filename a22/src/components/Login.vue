<template>
  <div class="body-font-size-normal">
    <div style="min-height: calc(-230px+ 100vh)">
      <div class="login mid">
        <div class="login_bg">
          <div class="login_bgx">
            <div class="top">
              <h1>个人网上银行登录</h1>
            </div>
            <div class="input">
              <el-form ref="loginFromRef" :model="LoginFrom" :rules="LoginFromRules" method="post" autocomplete="off" action="">
                <input type="text" v-model="LoginFrom.id" maxlength="30" name="id" required="required" placeholder="身份证" autofocus="autofocus" class="input_one">
                <input type="text" v-model="LoginFrom.password" name="password" maxlength="30" required="required" placeholder="密码" autofocus="autofocus" class="input_two">
                <el-button type="submit" class="input_btn" @click="LoginSubmit" style="margin-left: 20px;width: 260px">
                  登录
                </el-button>
                <div class="input_fk">
                  <div class="input_fxk">
                    <a style="margin-right: 10px" href="/creat">注册</a>
                  </div>
                  <div class="input_tishi">
                    <div class="tishi"></div>
                    <span class="anquan">安全提示：请勿向“不安全账户”转账</span>
                  </div>
                </div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style="width: 1200px">
          <img src="../assets/images/login_banner1_new.93659238.jpg">
        </div>
      </div>
      <div class="notice">
        <div class="notice_wrap mid">
          <ul>
            <li class="notice_tubiao"></li>
            <li>
              <a> 关于批量转换个人存量浮动利率贷款定价基准的公告 </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="qrcode_search">
        <div class="qrcode_search_block">
          <img src="../assets/images/qrcode.2ae1f85a.jpg">
          <p>手指银行App二维码</p>
        </div>
        <div class="qrcode_search_block">
          <img src="../assets/images/gfwechat.3bb6d9e9.jpg">
          <p>三湘银行官方微信公众号</p>
        </div>
        <div class="qrcode_search_block">
          <img src="../assets/images/WeChat.3f26a225.jpg">
          <p>三湘银行微信服务号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {

    return {

      LoginFrom: {
        id: "",
        password: ""
      },

      LoginFromRules: {
        name: [{required: true, message: "请输入身份证号", trigger: "blur"}],
        password: [{required: true, message: "请输入密码", trigger: "blur"}]
      }
    }
  },

  methods: {
    LoginSubmit() {
      let params = {
        userid: this.$route.params.userid
      }
      if (this.LoginFrom.id === '') {
        alert('请输入身份证号');
      } else if (this.LoginFrom.password === '') {
        alert('请输入密码');
      } else {
        // noinspection JSValidateTypes
        let creatData = {
          id: this.LoginFrom.id,
          password: this.$md5(this.LoginFrom.password),
        };
        console.log(creatData)
        this.$refs.loginFromRef.validate( async valid => {
          if(!valid) return;
          const response = await this.$http.post('http://47.97.23.194:8080/',creatData );
          console.log(response)
          // if(response.data === '用户名或密码错误') return  alert(response.data);
          alert('登录成功');
          // noinspection JSValidateTypes
          window.sessionStorage.setItem('token',this.$md5(creatData.password+creatData.id));
          await this.$router.push('/index');
        } )
      }
    }
  }
}
</script>

<style scoped>

</style>