<template>
  <div class="pos">
    <el-row>
      <el-col :span='8' class="pos-order" id="order-list">

        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData"  border style="width: 100%">
              <el-table-column prop="goodsName" label="名称"></el-table-column>
              <el-table-column prop="count" label="量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column  label="操作" width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            挂单
          </el-tab-pane>
          <el-tab-pane label="外卖">
            外卖
          </el-tab-pane>
        </el-tabs>

      </el-col>
      <el-col :span='17'>产品栏</el-col>
    </el-row>
  </div>
</template>

<script>
  //  import ElButton from "../../..de_modules/element-ui/packagesttonctton";
  //  import ElButton from "../../..de_modules/element-ui/packagesttonctton";
  //  import ElTable from "../../..de_modules/element-ui/packages/tablec/table";
  //  import ElRow from "element-ui/packages/rowc/row";
  //  import ElCol from "element-ui/packages/colc/col";
  //  import ElTabs from "../../..de_modules/element-ui/packages/tabsc/tabs";
  //  import ElTabPane from "../../..de_modules/element-ui/packages/tabsc/tab-pane";

  export default {
//    components: {
//      ElTabPane,
//      ElTabs,
//      ElCol,
//      ElRow},
//    components: {ElTable},
//    components: {ElButton},
//    components: {ElButton},
    name: 'pos',
    data(){
      return{
        tableData:[{

          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {

          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {

          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {

          goodsName: '甜筒',
          price: 8,
          count:1
        }]
      }
    },
    mounted:function () {
      var orderHeight = document.body.clientHeight;
      document.getElementById('order-list').style.height = orderHeight+'px';
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pos-order{
    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;

  }
  .div-btn{
    margin-top: 10px;
  }
</style>

