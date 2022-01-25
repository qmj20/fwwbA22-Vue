<template>
  <div class="body-font-size-normal">
    <!--    header-->
    <div style="min-height: calc(-230px+ 100vh)">
      <div>
        <div>
          <div class="cr_wrap">
            <div class="cr_page">
              <div class="zz_top mid">
                <div>我的信息</div>
              </div>
              <el-form ref="loginFromRef" :model="ForgetFrom" :rules="ForgetFromRules" method="get" autocomplete="off" action="">
                <div class="trade_mess">
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>客户姓名</span>
                    </div>
                    <div class="trade_mess_right">
                      <input v-model="ForgetFrom.name" maxlength="30" name="name" placeholder="请输入客户姓名" title="客户姓名" type="text">
                    </div>
                  </div>
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>身份证号码</span>
                    </div>
                    <div class="trade_mess_right">
                      <input v-model="ForgetFrom.id" maxlength="30" name="id" placeholder="请输入证件号码" title="证件号码" type="text">
                    </div>
                  </div>
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>新密码</span>
                    </div>
                    <div class="trade_mess_right">
                      <input v-model="ForgetFrom.password" maxlength="30" name="password" placeholder="请输入新密码" title="新密码" type="text">
                    </div>
                  </div>
                  <div class="trade_btns">
                    <el-button type="submit" class="trade_btn2" @click="ForgetSubmit">确定</el-button>
                    <a href="/index">
                      <button type="button" class="trade_btn3" >返回</button>
                    </a>
                  </div>
                </div>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "usermessage"
}
</script>

<style scoped>

</style>