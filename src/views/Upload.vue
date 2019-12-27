<template>
  <div class="upload-wrapper">
    <h1>图片上传</h1>
    <h3>基于Element-ui upload组件 + Nodejs koa2框架</h3>
    <upload-image 
      :imageUrl="imageUrl"
      @handleMounted="getFileList"
    />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="destination" label="destination"></el-table-column>
      <el-table-column prop="filename" label="filename"></el-table-column>
      <el-table-column prop="path" label="path"></el-table-column>
      <el-table-column prop="mimetype" label="mimetype"></el-table-column>
      <el-table-column prop="size" label="size"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
import UploadImage from './components/UploadImage'
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
      page: 1,
      pageSize: 10,
      total: 0,
      currentPage: 1,
      imageUrl: ''
    }
  },
  components: {
    UploadImage
  },
  mounted() {
    this.getFileList()
  },
  methods: {
    async getFileList() {
      const page = this.page
      const pageSize = this.pageSize
      const result = await axios.post('/api/getFileList', {
        page,
        pageSize
      })
      const { data } = result
      if (data.errno !== 0) {
        this.$message.error(data.message)
        this.tableData = []
        this.total = 0
        return
      }
      this.total = data.data.count
      this.tableData = data.data.fileList
      this.imageUrl = data.data.fileList[0].filename
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getFileList()
    },
    handleCurrentChange(val) {
      this.page = val
      this.getFileList()
    }
  }
}
</script>
<style scoped>
.upload-wrapper {
  text-align: center;
}
</style>