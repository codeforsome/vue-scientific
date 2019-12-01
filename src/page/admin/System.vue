<template>
  <div class="block">
    <div class="nav-top">
      <div class="left">
        <router-link class="link" :to="{name:'User'}">用户操作</router-link>
        <router-link class="link" :to="{name:'Item'}">科研题目操作</router-link>
        <router-link class="link" :to="{name:'Thesis'}">论文操作</router-link>
      </div>
      <div class="right">
        <span class="tip" style="color:red">{{tip}}</span>
        <el-input placeholder="请输入内容" v-model="inputVal" class="input-with-select">
          <el-select class="select-box" v-model="select" slot="prepend" placeholder="请选择类型">
            <el-option label="用户" value="1"></el-option>
            <el-option label="科研题目" value="2"></el-option>
            <el-option label="论文" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputVal: "",
      select: "",
      tip: ""
    };
  },
  methods: {
    search() {
      if (this.inputVal == "" || this.select == "") {
        this.tip = "内容和类型不能为空";
        return;
      } else {
        this.tip = "";
        if (this.select == 1) {
          this.$router.push({
            name: "UserSearch",
            params: { type: this.select, search: this.inputVal }
          });
        }
        if (this.select == 2) {
          this.$router.push({
            name: "ItemSearch",
            params: { type: this.select, search: this.inputVal }
          });
        }
        if (this.select == 3) {
          this.$router.push({
            name: "ThesisSearch",
            params: { type: this.select, search: this.inputVal }
          });
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.block {
  width: @blockWidth;
  margin: 0 auto;
  .nav-top {
    padding: 20px 0;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    .right {
      width: 400px;
      .select-box {
        width: 120px;
      }
    }
    .link {
      margin-left: 10px;
      font-weight: bold;
      color: #6f6f6f;
      border-bottom: 2px solid transparent;
      &:hover {
        color: @themeColor;
      }
    }
    .active {
      color: @themeColor;
      border-bottom-color: @themeColor;
    }
  }
}
</style>