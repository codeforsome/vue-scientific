<template>
  <div class="userinfo">
    <el-card class="box-card">
      <div class="text-wrap">
        <div class="text item">
          <img class="head-icon" width="100px" height="100px" :src="user.headIcon" alt />
        </div>
        <div class="text item">
          <span class="info">姓名：</span>
          <span class="info-content">{{user.nickname}}</span>
         
        </div>
        <div class="text item">
          <span class="info">学院：</span>
          <span class="info-content">{{user.college}}</span>
        </div>
        <div class="text item">
          <span class="info">学历：</span>
          <span class="info-content">{{user.education}}</span>
        </div>
         <el-divider></el-divider>
      </div>
         <div class="thesis-list">
             <div class="title">他的论文</div>
            <template v-for="(thesis,index) in thesisList">
              <thesis-item :thesis="thesis" :key="index"></thesis-item>
            </template>
          </div>
    </el-card>
  </div>
</template>
<script>
import { getUserInfoById,getThesisByUserId } from "./../request/api";
import ThesisItem from "./../components/ThesisItem";
export default {
  components: { ThesisItem },
  data() {
    return {
      user: {},
      thesisList:[],
    };
  },
  mounted() {
    getUserInfoById(this.$route.params.id).then(
      val => {
        this.user = val.data.data;
      },
      err => {}
    );
     getThesisByUserId(this.$route.params.id).then(
      val => {
        let result = val.data;
        this.thesisList = result.data;
      },
      err => {}
    );
  }
};
</script>
<style lang="less" scoped>
.userinfo {
  font-size: @baseFontSize;
  width: @blockWidth;
  margin: 0 auto;
  margin-top: 20px;
  > .box-card {
    border-radius: @borderRaduis;
    .text-wrap {
      .item {
        margin-bottom: 18px;

        .info {
          color: @themeColor;
        }
      }
    }
  }

   .title{
         font-weight: bold;
      color: @themeColor;
    }
}
</style>