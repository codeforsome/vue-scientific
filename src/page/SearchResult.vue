<template>
  <div class="search-box">
    <div class="main-wrap">
      <div class="main-show">
        <el-card v-if="hotUser.length!=0" class="box-card">
          <div class="head">
            <span class="head-title">用户</span>
          </div>
          <div class="user-list">
            <div class="item" v-for="(item,index) in hotUser" :key="index">
              <div class="left">
                <img class="head-icon" :src="item.headIcon" />
              </div>
              <div class="right">
                <div class="top">
                  <span class="hot">热门</span>
                  <span class="name">{{item.nickname}}</span>
                </div>
                <div class="bottom">
                  <span class="readNum num" title="热度量">
                    <span class="el-icon-s-promotion"></span>
                    {{item.hot}}
                  </span>
                </div>
                <div class="button-wrap">
                  <el-button type="primary" class="button" round>
                    <router-link class="link" :to="{name:'UserInfo',params:{ id:item.id}}">查看更多</router-link>
                    <span class="el-icon-d-arrow-right"></span>
                  </el-button>
                </div>
              </div>
            </div>
          </div>
        </el-card>
        <el-card v-else class="box-card">
          <div class="head">
            <span class="head-title">用户</span>
          </div>
          <div>搜索结果没有内容。</div>
        </el-card>
      </div>

      <div class="mian-thesis-hot">
        <el-card v-if="thesisList.length!=0" class="box-card">
          <div class="hot-title">论文</div>
          <div class="thesis-list">
            <template v-for="(thesis,index) in thesisList">
              <thesis-item :thesis="thesis" :key="index"></thesis-item>
            </template>
          </div>
        </el-card>
         <el-card  v-else class="box-card">
          <div class="hot-title">论文</div>
          <div>搜索结果没有内容。</div>
        </el-card>
        <el-card v-if="itemList.length!=0" class="box-card item-box">
          <div class="hot-title">科研题目</div>
          <div class="thesis-list">
            <template v-for="(item,index) in itemList">
              <child-item :item="item" :key="index"></child-item>
            </template>
          </div>
        </el-card>
         <el-card v-else class="box-card item-box">
          <div class="hot-title">科研题目</div>
          <div>搜索结果没有内容。</div>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import ThesisItem from "./../components/ThesisItem";
import ChildItem from "./../components/ChildItem";
import { searchUser, searchItem, searchThesis } from "./../request/api";
export default {
  components: { ThesisItem, ChildItem },
  data() {
    return {
      hotUser: [],
      thesisList: [],
      itemList: []
    };
  },
  methods: {},
  watch:{
      '$route'(to,from){
          this.$router.go(0);
      }
  },
  mounted() {
    searchUser({type:0, search: this.$route.params.search }).then(
      val => {
        let result = val.data;
        this.hotUser = result.data;
      },
      err => {}
    );
    searchThesis({ type:0,search: this.$route.params.search }).then(
      val => {
        let result = val.data;
        this.thesisList = result.data;
      },
      err => {}
    );

    searchItem({type:0, search: this.$route.params.search }).then(
      val => {
        let result = val.data;
        this.itemList = result.data;
      },
      err => {}
    );
  },
 
};
</script>
<style lang="less" scoped>
.search-box {
  width: @blockWidth;
  margin: 0 auto;
  .el-carousel__item {
    transition: all 1s;
  }
  .slide-img {
    width: 100%;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.main-wrap {
  width: @blockWidth;
  margin: 0 auto;
  padding-top: 20px;
}
.mian-thesis-hot {
  margin-top: 20px;
  .box-card {
    border-radius: @borderRaduis;
    .hot-title {
      font-weight: bold;
      color: @themeColor;
    }
  }
  .item-box {
    margin-top: 20px;
  }
}

.main-show {
  .box-card {
    font-size: @baseFontSize;
    width: 100%;
    border-radius: @borderRaduis;
    .item {
      display: flex;
      margin-top: 20px;
      .right {
        margin-left: 20px;
        .top {
          > .hot {
            color: white;
            font-size: 0.8em;
            background-color: #ffcc00;
            padding: 3px 6px;
            border-radius: 3px;
          }
          .name {
            font-weight: bold;
            color: @black;
            margin-left: 10px;
          }
        }

        .center {
          margin-top: 10px;
          color: @gray;
        }

        .bottom {
          margin-top: 16px;
          > .num {
            margin-left: 6px;
            &:hover {
              color: @themeColor;
            }
          }
        }

        .button-wrap {
          margin-top: 15px;
          .button {
            font-size: 0.8em;
            padding: 6px 11px;
          }
        }
      }
    }
    .head-title {
      color: @themeColor;
      font-weight: bold;
    }
    .head-icon {
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
  }
}
.bottom-box {
  display: flex;
  justify-content: center;
}
</style>