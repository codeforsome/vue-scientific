<template>
  <div class="item-box">
    <div class="table-box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column label="创建日期" width="120">
          <template
            slot-scope="scope"
          >{{tableData[scope.$index].createDate.slice(0,4)}}-{{tableData[scope.$index].createDate.slice(5,10)}}</template>
        </el-table-column>
        <el-table-column label="创建人" width="120">
          <template slot-scope="scope">
            <span>{{userList[scope.$index].nickname}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="题目"></el-table-column>
        <el-table-column label="内容">
          <template slot-scope="scope">
            <span>{{tableData[scope.$index].content.slice(0,30)+'...'}}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope" >
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="bottom-box">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="userPagination.total"
          :page-size="userPagination.pageSize"
          @current-change="userCurrentChange"
          @prev-click="userCurrentChange"
          @next-click="userCurrentChange"
        ></el-pagination>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="deleteDialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>{{deleteTip}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deletItem">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import {
  getAllItem,
  getUserInfoById,
  getItemCount,
  deleteItemById
} from ".././../request/api";
export default {
  data() {
    return {
      deleteDialogVisible: false,
      deleteTip: "",
      tableData: [],
      userList: [],
      userPagination: {
        total: 10,
        pageSize: 4,
        currentPage: 0
      }
    };
  },
  created() {
    getItemCount().then(
      val => {
        let result = val.data;
        this.userPagination.total = result.data;
      },
      err => {}
    );
    getAllItem().then(
      val => {
        let result = val.data;
        this.tableData = result.data;
        for (let i = 0; i < this.tableData.length; i++) {
          getUserInfoById(this.tableData[i].authorId).then(
            val => {
              this.userList.push(val.data.data);
            },
            error => {}
          );
        }
      },
      err => {}
    );
  },
  methods: {
    handleDelete(index) {
      this.deleteTip = "是否删除该题目？";
      this.deleteDialogVisible = true;
      this.choiceCurrent = index;
    },
    deletItem() {
      console.log(this.tableData[this.choiceCurrent].id);
      deleteItemById({ id: this.tableData[this.choiceCurrent].id }).then(
        val => {
          this.deleteTip = "删除成功";
          setTimeout(() => {
            this.deleteDialogVisible = false;
          }, 1000);
        },
        err => {
          this.deleteTip = "删除失败";
          setTimeout(() => {
            this.deleteDialogVisible = false;
          }, 1000);
        }
      );
    },
    userCurrentChange(page) {
      this.userPagination.currentPage = page;
      let obj = { currentPage: page, pageSize: this.userPagination.pageSize };
      getAllItem(obj).then(
        val => {
          let result = val.data;
          this.tableData = result.data;
        },
        err => {}
      );
    }
  }
};
</script>
<style lang="less" scoped>
.table-box {
  .table-title {
    color: @themeColor;
  }

  .bottom-box {
    display: flex;
    justify-content: center;
  }
}
</style>