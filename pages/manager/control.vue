<template>
  <div
    v-loading="loading"
    id="manager-control"
  >
    <header class="page-header">
      <el-button
        type="primary"
        @click="addAdmin"
      >
        <i class="el-icon-plus"/>
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
