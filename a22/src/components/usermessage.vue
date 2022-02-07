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
              <el-form  :model="ShowMessage" method="get" autocomplete="off" action="">
                <div class="trade_mess">
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>客户姓名</span>
                    </div>
                    <div class="trade_mess_right">
                      <span style="background-color: white">{{ShowMessage.name}}</span>
                    </div>
                  </div>
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>身份证号码</span>
                    </div>
                    <div class="trade_mess_right">
                      <span style="background-color: white">{{ShowMessage.id}}</span>
                    </div>
                  </div>
                  <div class="trade_mess_row">
                    <div class="trade_mess_left">
                      <span>密码</span>
                    </div>
                    <div class="trade_mess_right">
                      <span style="background-color: white">{{ShowMessage.password}}</span>
                    </div>
                  </div>
                  <div class="trade_btns" style="padding-top: 50px">
                    <a href="/usermessage/user/messageChange">
                      <button type="button" class="trade_btn2" >更改信息</button>
                    </a>
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
  name: "usermessage",
  data(){
    return {
      ShowMessage: {},
    }
  },
  created () {
    this.getShowMessage()
  },
  methods: {
    async getShowMessage () {

      const response = await this.$http.get('http://47.97.23.194:8080/user/select-id?id=12312312')
      if (response.status !== 200 || response.data === '') return this.$message.error('获取数据失败')
      this.ShowMessage = response.data
    },
  }
}
</script>

<style scoped>

</style>