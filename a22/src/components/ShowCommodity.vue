<template>
  <div>
    <div style="min-height: calc(-230px+ 100vh)">
      <div class="lclb_wrap mid">
        <div class="lclb">
          <h2>我行产品</h2>
          <p>安全灵活  可转让</p>
        </div>
        <div class="lclb_lb_new" v-for="site in tableData" >
          <ul >
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
          <div  style="margin-left: 32%;padding-bottom: 50px;padding-top: 20px">
            <el-pagination @size-change="sizeChange" @current-change="currentChange"
                           :current-page="page" :page-size="size" :page-sizes="pageSizes"
                           layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
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
      page: 1, //第几页
      size: 3, //一页多少条
      total:5, //总条目数
      pageSizes: [3, 5, 10, 20, 50, 100, 200, 300, 400, 500, 1000], //可选择的一页多少条
      tableData: [], //表格绑定的数据
      data1:[],
      }
  },
  created () {
    this.getSellMessage();
    this.getTabelData();
  },

  methods: {

    async getSellMessage () {
      let params = {
        seckillId: this.$route.params.seckillId,
        id: this.$route.params.id
      }
      const response = await this.$http.get('http://47.97.23.194:8080/commodity/select_by_seckill?seckillId='+this.$route.params.seckillId)
      console.log(response)
      if (response.status !== 200 || response.data === '') return this.$message.error('获取数据失败')
      this.SellMessage = response.data
      console.log(this.SellMessage)
      this.data1.push(this.SellMessage[0])
      for (let i = 0; i < this.SellMessage.length-1; i++) {
        this.data1.push(this.SellMessage[i])
      }
      console.log(this.data1)
      // this.data1=JSON.parse(this.SellMessage)
      // console.log(this.SellMessage[1])
    },
    getTabelData() {
      //allData为全部数据
      this.tableData=this.data1.slice(
          (this.page - 1) * this.size,
          this.page * this.size
      );
      this.total=this.SellMessage.length
    },
    //page改变时的回调函数，参数为当前页码
    currentChange(val) {
      console.log("翻页，当前为第几页", val);
      this.page = val;
      this.getTabelData();
    },
    //size改变时回调的函数，参数为当前的size
    sizeChange(val) {
      console.log("改变每页多少条，当前一页多少条数据", val);
      this.size = val;
      this.page = 1;
      this.getTabelData();
    },
  }
}
</script>

<style scoped>
.lclb_lb_new{height:120px;background:#fff}.lclb_lb_new ul li{width:25%;height:78px;margin-top:20px;border-right:1px solid #eee;float:left}.lclb_lb_new ul li:last-child{border:none}.lclb_lb_new ul li:first-child h2{font-size:30px;color:#ea0437}.lclb_lb_new ul li h2{font-size:30px;margin:10px 0 0 100px}.lclb_lb_new ul li p{color:#999;font-size:14px;margin-left:100px}.lclb_lb_new ul li button{width:168px;height:46px;color:#fff;font-size:18px;border-radius:6px;background:#ea0437;margin:18px 0 0 56px;cursor:pointer}
</style>