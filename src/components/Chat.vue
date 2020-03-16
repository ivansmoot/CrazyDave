<template>
  <div id='chat'>
    <div style="position:relative; width:600px; height:440px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); margin: 0 auto">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容">
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange"
        background
        layout="prev, pager, next"
        :page-size="pagesize"
        :total="this.filterInfs.length"
        style="position:absolute; top:400px; left:220px">
      </el-pagination>
    </div>
    <p></p>
    <div style="margin: 0 auto; width:600px">
      <el-tag style="left:100px" type="info">发表评论</el-tag>
      <p></p>
      <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="140"
      show-word-limit
      style="width: 600px;"
      >
      </el-input>
      <div style="position:relative; left:520px; top:15px">
        <el-button type="primary" round>发表</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'chat',
  data () {
    return {
      textarea: '',
      pagesize: 2,
      currentPage: 1,
      filterInfs: [{
        id: '1',
        date: '1',
        content: '1'
      }, {
        id: '2',
        date: '2',
        content: '2'
      }, {
        id: '3',
        date: '3',
        content: '3'
      }]
    }
  },
  computed: {
    tableData () {
      return this.filterInfs.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      )
    }
  },
  methods: {
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    }
  }
}
</script>
