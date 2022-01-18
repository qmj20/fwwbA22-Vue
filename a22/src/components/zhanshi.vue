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
            <h2>{{site.jieshao}}</h2>
            <p>最高年化效率</p>
          </li>
          <li>
            <h2>{{site.jine}}</h2>
            <p>单份金额</p>
          </li>
          <li>
            <button :href="'/detail/'+site.id*5+2*3">查看详情</button>
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
      SellMessage: [
        {jieshao:"较基准上浮55%",jine:10010,shijian:"12:30",id:"0"},
        {jieshao:"较基准上浮25%",jine:10020,shijian:"12:50",id:"1"},
        {jieshao:"较基准上浮35%",jine:10030,shijian:"11:00",id:"2"},
      ],
    }
  },
  // created () {
  //   this.getSellMessage()
  // },
  // methods:{
  //   async getSellMessage(){
  //
  //   }
  // }
}
</script>

<style scoped>

</style>