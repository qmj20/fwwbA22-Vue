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
            <h2>{{site.name}}</h2>
            <p>最高年化效率</p>
          </li>
          <li>
            <h2>{{site.price}}</h2>
            <p>单份金额</p>
          </li>
          <li>
            <button :href="mymethon()">查看详情</button>
            <p>{{site.shijian}}点开始秒杀</p>
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
        id: this.$route.params.id
      }
      const response = await this.$http.get('http://47.97.23.194:8080/commodity/select_all_com')
      console.log(response)
      if (response.status !== 200 || response.data === '') return this.$message.error('获取数据失败')
      this.SellMessage = response.data
    },
}
}
  function  mymethon(name,sex,address){
  alert("姓名"+name+";性别:"+sex+";住址:"+address);
}

</script>

<style scoped>

</style>