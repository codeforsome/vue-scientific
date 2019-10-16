<template>
  <div class="main">
    <div class="block">
      <el-carousel :interval="8000">
        <el-carousel-item v-for="item in 4" :key="item">
          <router-link :to="{name:'Main'}">
            <img class="slide-img" src="./../assets/img/slider-2-1.png" alt />
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="main-wrap">
      <div class="main-show">
        <div class>
          <el-card class="box-card">
            <div class="head">
              <span class="head-title">热门老师</span>
            </div>
            <div class="user-list">
              <div class="item" v-for="(item,index) in hotUser" :key="index">
                <div class="left">
                  <img class="head-icon" src="./../assets/img/slider-2-1.png" alt />
                </div>
                <div class="right">
                  <div class="top">
                    <span class="hot">热门</span>
                    <span class="name">{{item.nickname}}</span>
                  </div>
                  <div class="center">
                    <p class="college">学院：{{item.college}}</p>
                  </div>
                  <div class="bottom">
                    <span class="thesisNum num" title="论文量">
                      <span class="el-icon-reading"></span>
                      {{item.thesisNum}}
                    </span>
                    <span class="goodNum num" title="收藏量">
                      <span class="el-icon-star-on"></span>
                      {{item.collectNum}}
                    </span>
                    <span class="readNum num" title="阅读量">
                      <span class="el-icon-view"></span>
                      {{item.readNum}}
                    </span>
                  </div>
                  <div class="button-wrap">
                    <el-button type="primary" class="button" round>
                      查看更多
                      <span class="el-icon-d-arrow-right"></span>
                    </el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>

      <div class="mian-thesis-hot">
        <el-card class="box-card">
          aaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserInfoByHot } from "./../request/api";
export default {
  data() {
    return {
      hotUser: []
    };
  },
  created() {
    getUserInfoByHot().then(
      val => {
        let result = val.data;
        this.hotUser = result.data;
      },
      err => {}
    );
  }
};
</script>
<style lang="less" scoped>
.block {
  width: 1024px;
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
  display: flex;
  padding-top:20px;
}
.mian-thesis-hot{
    margin-left:20px;
}

@mainShowWidth: 400px;
.main-show {
  width: @mainShowWidth;
  .box-card {
    font-size: @baseFontSize;
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
          margin-top: 25px;
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
      width: 150px;
      height: 150px;
    }
  }
}
</style>