<template>
  <el-breadcrumb
    class="app-breadcrumb"
    separator="/"
  >
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="item in levelList"
        :key="item.path"
      >
        <template v-if="item.meta.title">
          <span
            v-if="item.path !== '/dashboard'"
            class="no-redirect"
          >{{ mapTitle(item.meta.title) }}</span>
          <a
            v-else
            @click.prevent="handleLink(item)"
          >{{ mapTitle(item.meta.title) }}</a>
        </template>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import pathToRegexp from 'path-to-regexp'
import sidebarMixin from '~/mixins/sidebar'

export default {
  mixins: [sidebarMixin],
  data() {
    return {
      levelList: null
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true
        }
      })
      const first = matched[0]
      if (first && first.name !== 'dashboard') {
        matched = [{ path: '/dashboard', meta: { title: 'dashboard' } }].concat(
          matched
        )
      }
      this.levelList = matched
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      if (path === '/dashboard') {
        return this.$router.push('/dashboard/')
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
