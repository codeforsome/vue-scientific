<template>
  <div class="right-content">
    <el-card class="box-card">
      <div class="thesis-wrap">
        <div class="top">
          <span>我的论文</span>
          <span>发布新的论文</span>
        </div>
        <div class="thesis-list">
          <div class="item" v-for="(item,index) in thesis" :key="index">
            <div class="left">
              <span class="day">{{item.date.slice(5)}}</span>
              <span class="year">{{item.date.slice(0,4)}}</span>
            </div>
            <div class="right">
              <div class="title">{{item.title}}</div>
              <div class="abstract">摘要：{{item.abstract.slice(0,50)+'...'}}</div>
              <div class="keyword">关键词：{{item.keyword}}</div>
           <el-divider></el-divider>

            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getThesisByUsername } from "./../request/api";
export default {
  data() {
    return {
      thesis: []
    };
  },
  created() {
    getThesisByUsername("").then(
      val => {
        let result = val.data;
        this.thesis = result.data;
      },
      err => {}
    );
  }
};
</script>
<style lang="less" scoped>
@textMargin:6px;
.thesis-list {
    font-size: 16px;
    margin-top:20px;
  .top {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
  .item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .left {
      width:5em;
      text-align: center;
      background-color: #67c23a;
      padding:10px 0;
      color:white;
      >.day{
          font-size: 1em;
      }
      >.year{
          font-size: 1.6em;
      }
    }
    .right {
      margin-left: 20px;
      .title{
          margin-top:@textMargin;
          color: @black;
          font-weight: bold;
          font-size: 1.1em;
      }
      .abstract{
          margin-top:@textMargin;
        color: @gray;
         font-size: 0.9em;
         max-width: 30em;
      }
      .keyword{
          margin-top:@textMargin;
          font-size: 0.8em;
        color: @themeColor;

      }
    }
  }
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
  border-radius: 20px;
}
</style>