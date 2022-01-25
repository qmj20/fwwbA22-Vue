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
              <el-form ref="loginFromRef" :model="CreatFrom" :rules="CreatFromRules" method="post" autocomplete="off" action="">
                <div class="trade_mess">
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>客户姓名</span>
                    </div>
                    <div class="trade_mess_right">
                      <input v-model="CreatFrom.name" maxlength="30" name="name" placeholder="请输入客户姓名" title="客户姓名" type="text">
                    </div>
                  </div>
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>身份证号码</span>
                    </div>
                    <div class="trade_mess_right">
                      <input v-model="CreatFrom.id" maxlength="30" name="id" placeholder="请输入证件号码" title="证件号码" type="text">
                    </div>
                  </div>
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>密码</span>
                    </div>
                    <div class="trade_mess_right">
                      <input v-model="CreatFrom.password" maxlength="30" name="password" placeholder="请输入密码" title="密码" type="text">
                    </div>
                  </div>
                  <div class="trade_btns">
                    <el-button type="submit" class="trade_btn2" @click="CreatSubmit">确定</el-button>
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
  name: "Creat",
  data() {

    return {

      CreatFrom: {
        id: "",
        name: "",
        password: ""
      },

      CreatFromRules: {
        id: [{required: true, messages: "请输入身份证号", trigger: "blur"}],
        name: [{required: true, message: "请输入用户名", trigger: "blur"}],
        password: [{required: true, message: "请输入密码", trigger: "blur"}]
      }
    }
  },

  methods: {
    CreatSubmit() {
      if (this.CreatFrom.name === '') {
        alert('请输入用户名');
      } else if (this.CreatFrom.password === '') {
        alert('请输入密码');
      } else if (this.CreatFrom.id === '') {
        alert('请输入id');
      } else {
        // noinspection JSValidateTypes
        let data1 = new Date().getTime()
        let creatData = {
          date: data1,
          id: this.CreatFrom.id,
          name: this.CreatFrom.name,
          password: this.$md5(this.CreatFrom.password),
          otherFields: [],
          qualifications: true,
          state: true
        };
        console.log(creatData)
        this.$refs.loginFromRef.validate( async valid => {
          if(!valid) return;
          const response = await this.$http.post('http://47.97.23.194:8080/user/insert_user',creatData );
          console.log(response)
          // if(response.data === '用户名或密码错误') return  alert(response.data);
          alert('注册成功');
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