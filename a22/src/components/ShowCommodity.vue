<template>
  <div>
    <div style="min-height: calc(-230px+ 100vh)">
      <div class="lclb_wrap mid">
        <div class="lclb">
          <h2>我行产品</h2>
          <p>安全灵活  可转让</p>
        </div>
        <div class="lclb_lb_new" v-for="site in SellMessage">
          <ul>
            <li>
              <h2>{{site.name}}</h2>
              <p>商品名称</p>
            </li>
            <li>
              <h2>共{{site.num}}份</h2>
              <p>数量</p>
            </li>
            <li>
              <h2>{{site.price}}</h2>
              <p>每份</p>
            </li>
            <li>
              <a :href="'/detail/id='+site.id">
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
  name: "ShowCommodity",
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
        seckillId: this.$route.params.seckillId,
        id: this.$route.params.id
      }
      const response = await this.$http.get('http://47.97.23.194:8080/commodity/select-seckill?seckillId='+this.$route.params.seckillId)
      console.log(response)
      if (response.status !== 200 || response.data === '') return this.$message.error('获取数据失败')
      this.SellMessage = response.data
    },
  }
}
</script>

<style scoped>
.lclb_lb_new{height:120px;background:#fff}.lclb_lb_new ul li{width:25%;height:78px;margin-top:20px;border-right:1px solid #eee;float:left}.lclb_lb_new ul li:last-child{border:none}.lclb_lb_new ul li:first-child h2{font-size:30px;color:#ea0437}.lclb_lb_new ul li h2{font-size:30px;margin:10px 0 0 100px}.lclb_lb_new ul li p{color:#999;font-size:14px;margin-left:100px}.lclb_lb_new ul li button{width:168px;height:46px;color:#fff;font-size:18px;border-radius:6px;background:#ea0437;margin:18px 0 0 56px;cursor:pointer}
</style>