<template>
  <div>
  <div style="min-height: calc(-230px+ 100vh)">
    <div class="lclb_wrap mid">
      <div class="lclb">
        <h2>我行产品</h2>
        <p>安全灵活  可转让</p>
      </div>
      <div class="lclb_lb" v-for="site in SellMessage">
        <ul>
          <li>
            <h2>{{site.timeBegin}}</h2>
            <p>开始时间</p>
          </li>
          <li>
            <h2>{{site.rule}}</h2>
            <p>规则</p>
          </li>
          <li>
            <a :href="'/show/id='+site.id">
            <button>查看详情</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "zhanshi",
  data(){
    return {
      SellMessage: {},
    }
  },
  created () {
    this.getSellMessage()

  },
  methods: {
    async getSellMessage () {
      let params = {
        seckillId: this.$route.params.seckillId
      }
      const response = await this.$http.get('http://47.97.23.194:8080/seckill/select_all_seckill')
      console.log(response)
      if (response.status !== 200 || response.data === '') return this.$message.error('获取数据失败')
      this.SellMessage = response.data
    },
}
}
</script>

<style scoped>

</style>