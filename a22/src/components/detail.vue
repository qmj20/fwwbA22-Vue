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
    ShowMessage: {
      name:"阖家乐",num:10000,price:20000,introduce:"在风险方面，银行存款几乎无风险，而银行理财产品存在较低的风险；在资金流动性方面，银行存款可以保障本金提前赎回，而银行理财提前赎回可能由于手续费原因而损失本金；在收益方面，银行理财产品会高于银行存款。. 银行理财产品是由银行为个人客户提供的低风险理财服务。. 和其他理财品种相比，它的风险很低，平均年利率在4%左右。. 投资期限比较灵活，从7天、2周到一年、三年都有相应产品。. 根据年利率的不同，投资门槛也不同，有1千起的，也有5万、10万起步的。. 5.p2p. 经过18、19年这一波爆雷后，存活下来的P2P平台的规模和利润更为集中，其风险性有一定的降低，未来流动性也会慢慢恢复，p2p平台将有更好的发展。"
  },
  }
},
}
</script>

<style scoped>

</style>