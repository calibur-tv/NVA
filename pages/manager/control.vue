<template>
  <div
    id="manager-control"
    v-loading="loading"
  >
    <header class="page-header">
      <el-button type="primary">
        <i class="el-icon-plus" />
        添加管理员
      </el-button>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
</script>
