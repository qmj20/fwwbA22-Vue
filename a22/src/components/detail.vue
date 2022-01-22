<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <div style="margin:0 auto">
    <div style="min-height: calc(-230px+ 100vh)">

        <div class="right_top mid">
          <div>商品名称</div>
        </div>
<!--      <div style="margin:0 auto">-->
          <div class="wrap_zhineng left">
            <img src="../assets/images/detail.jpg" style="width: 400px; height: 267px; margin: 16px auto 8px;">
            <h2>{{this.ShowMessage.name}}</h2>
          </div>
      <div class="right_top mid">
        <div>商品简介</div>
      </div>
            <div class="wrap_zhineng left">
              <div style="margin: 10px">
                <div style="margin: 30px">
                    <h3>{{this.ShowMessage.introduce}}</h3>
                </div>
                <p>售价(每人限购一次)</p>
                <h2>每份{{this.ShowMessage.price}}元</h2>
                <p>共计放出</p>
                <h2>{{this.ShowMessage.num}}份</h2>
                <button>购买</button>
              </div>
              </div>
          </div>
<!--      </div>-->
  </div>
</template>

<script>
export default {
  name: "detail",
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
      let params = {
        id: this.$route.params.id
      }
      const response = await this.$http.get('http://47.97.23.194:8080/commodity/select_com_by_id?id='+ this.$route.params.id)
      // console.log('api/commodity/select_com_by_id?id='+ this.$route.params.id)
      if (response.status !== 200 || response.data === '') return this.$message.error('获取数据失败')
      this.ShowMessage = response.data
    },
  }
}
</script>

<style scoped>

</style>