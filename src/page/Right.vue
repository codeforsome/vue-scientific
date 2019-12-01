<template>
  <div class="right-content">
    <el-card class="box-card">
      <div class="thesis-wrap">
        <div class="top">
          <span class="my-thesis">我的论文</span>
          <router-link :to="{name:'ThesisAdd'}" >
            <el-link icon="el-icon-s-promotion">发布新的论文</el-link>
          </router-link>
        </div>
        <div class="thesis-list">
          <template v-for="(thesis,index) in thesisList">
            <div class="wrap">
            <thesis-item :thesis="thesis" :show="true" :key="index"></thesis-item>
            <div style="height:30px;"> 
              <el-button size="mini" type="danger" @click="handleDelete(index)">删除</el-button>
            </div>
            </div>
          
          </template>
        </div>
      </div>
    </el-card>
     <el-dialog title="提示" :visible.sync="deleteDialogVisible" width="30%">
      <span>{{deleteTip}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deletOk()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getThesisByParams ,userDeleteThesisById} from "./../request/api";
import ThesisItem from "./../components/ThesisItem";
export default {
  components: { ThesisItem },
  data() {
    return {
      thesisList: [],
      deleteIndex:'',
      deleteDialogVisible:false,
      deleteTip:'',
    };
  },
  created() {
    getThesisByParams("").then(
      val => {
        let result = val.data;
        this.thesisList = result.data;
      },
      err => {}
    );
  },
  methods:{
    handleDelete(index){
      this.deleteTip='是否删除该论文';
      this.deleteDialogVisible=true;
      this.deleteIndex=index;
    },
    deletOk(){
       this.deleteDialogVisible=false;
       userDeleteThesisById({id:this.thesisList[this.deleteIndex].id}).then(val=>{
         window.location.href=window.location.href;
       },err=>{})
    }
  }
};
</script>
<style lang="less" scoped>
.thesis-list {
  font-size: 16px;
  margin-top: 20px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  width: 580px;
  border-radius: @borderRaduis;
  .top {
    display: flex;
    justify-content: space-between;
    .my-thesis {
      font-weight: bold;
      color: @themeColor;
    }
  }
}
.wrap{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>