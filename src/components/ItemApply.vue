<template>
  <div class="apply-box">
    <div class="table-box">
      <div class="table-title">申请人状态:</div>
      <el-table :data="tableData" style="width: 100%" >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="date" label="申请日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="apply" label="申请状态">
          <template slot-scope="scope">
            <el-select @change="changeApply(scope.$index)"  v-model="tableData[scope.$index].apply" placeholder="未选择">
              <el-option
                v-for="item in applyOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="check" label="专家审查"></el-table-column>
        <el-table-column label="选择专家审查">
          <template slot-scope="scope">
            <el-select @change="changeProfessor(scope.$index)" v-model="tableData[scope.$index].professor" placeholder="未选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="file" label="资料提交"></el-table-column>
      </el-table>
      <div class="bottom">
        <el-link @click="back()" type="primary">返回上一级</el-link>
      </div>
    </div>
  </div>
</template>
<script>
import { updateItemApplyState ,updateItemProfessor,getItemApplyByItemId} from "./../request/api";
export default {
  data() {
    return {
      id:'',
      applyOptions: [
        {
          value: "通过",
          label: "通过"
        },
        {
          value: "未通过",
          label: "未通过"
        }
      ],
      options: [
        {
          value: "专家1",
          label: "专家1"
        },
        {
          value: "专家2",
          label: "专家2"
        },
        {
          value: "专家3",
          label: "专家3"
        },
        {
          value: "专家4",
          label: "专家4"
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          apply: "",
          check: "未审查",
          file: "未提交",
          professor:'',
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          apply: "未通过",
          check: "未审查",
          file: "未提交",
          professor:'专家2',

        },
        {
          date: "2016-05-01",
          name: "王小虎",
          apply: "未通过",
          check: "未审查",
          file: "未提交",
          professor:'专家3',

        },
        {
          date: "2016-05-03",
          name: "王小虎",
          apply: "通过",
          check: "未审查",
          file: "点击查看",
          professor:'专家4',

        }
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    changeApply(index){
        updateItemApplyState(this.tableData[index]).then(val=>{
            let result=val.data;
        },err=>{})
    },
    changeProfessor(index){
        updateItemProfessor(this.tableData[index]).then(val=>{
            let result=val.data;
        },err=>{})
    }
  },
   mounted(){
    this.id = this.$route.params.id;
     getItemApplyByItemId(this.id).then(val=>{
            let result=val.data;
            this.tableData=result.data;
        },err=>{})
  }
};
</script>

<style lang="less" scoped>
.table-box {
  .table-title {
    color: @themeColor;
  }

  .bottom {
    margin-top: 10px;
  }
}
</style>