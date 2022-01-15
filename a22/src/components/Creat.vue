<template>
  <div class="body-font-size-normal">
    <!--    header-->
    <div style="min-height: calc(-230px+ 100vh)">
      <div>
        <div>
          <div class="cr_wrap">
            <div class="cr_page">
              <div class="zz_top mid">
                <div>注册</div>
              </div>
              <div name="RegistePreForm">
                <div class="trade_mess">
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>客户姓名</span>
                    </div>
                    <div class="trade_mess_right">
                      <input maxlength="30" name="UserName" placeholder="请输入客户姓名" title="客户姓名" type="text">
                    </div>
                  </div>
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>身份证号码</span>
                    </div>
                    <div class="trade_mess_right">
                      <input maxlength="30" name="UserNum" placeholder="请输入证件号码" title="证件号码" type="text">
                    </div>
                  </div>
                  <!--                                <div class="trade_mess_row">-->
                  <!--                                    <div class="trade_mess_left">-->
                  <!--                                        <span>账（卡）号</span>-->
                  <!--                                    </div>-->
                  <!--                                    <div class="trade_mess_right">-->
                  <!--                                        <input maxlength="30" name="CardNum" placeholder="请输入绑定卡卡号" title="银行卡号" type="text">-->
                  <!--                                    </div>-->
                  <!--                                </div>-->
                  <!--                                <div class="trade_mess_row">-->
                  <!--                                    <div class="trade_mess_left">-->
                  <!--                                        <span>手机号码</span>-->
                  <!--                                    </div>-->
                  <!--                                    <div class="trade_mess_right">-->
                  <!--                                        <input maxlength="30" name="PhoneNum" placeholder="请输入手机号" title="手机号" type="text">-->
                  <!--                                    </div>-->
                  <!--                                </div>-->
                  <!--                                <div class="trade_mess_row" value>-->
                  <!--                                    <div class="trade_mess_left">-->
                  <!--                                        <span>短信验证码</span>-->
                  <!--                                    </div>-->
                  <!--                                    <div class="trade_mess_right">-->
                  <!--                                        <input id="OtpPassword" maxlength="6" name="OtpPassword" placeholder="请输入手机验证码" title="短信验证码" type="text" class="shortMess_input" style="float:left">-->
                  <!--                                        <div class="sendCode" style="line-height: 35px; float: left; border: 1px solid rgb(234, 4, 55); text-align: center; color: rgb(232, 163, 101); width: 94px; height: 35px;">-->
                  <!--                                            <h1>获取验证码</h1>-->
                  <!--                                        </div>-->
                  <!--                                    </div>-->
                  <!--                                </div>-->
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>密码</span>
                    </div>
                    <div class="trade_mess_right">
                      <input maxlength="30" name="UserNum" placeholder="请输入密码" title="密码" type="text">
                    </div>
                  </div>
                  <div class="trade_btns">
                    <button type="submit" class="trade_btn2">确定</button>
                    <button type="button" class="trade_btn3">返回</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Creat"
}
</script>

<style scoped>

</style>