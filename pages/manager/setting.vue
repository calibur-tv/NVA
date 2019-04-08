<template>
  <div
    id="manager-setting"
    v-loading="loading"
  >
    <header class="page-header">
      <el-button type="primary">
        <i class="el-icon-plus" />
        创建权限
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
