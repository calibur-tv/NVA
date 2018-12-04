<template>
  <div
    v-loading="loading"
    id="manager-setting"
  >
    <header class="page-header">
      <el-button type="primary">
        <i class="el-icon-plus"/>
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
