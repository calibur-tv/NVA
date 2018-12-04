export default {
  methods: {
    mapTitle(title) {
      return {
        dashboard: '首页',
        manager: '管理',
        'manager-control': '权限管理',
        'manager-setting': '权限设置'
      }[title]
    },
    mapIcon(icon) {
      // icons: https://fontawesome.com/icons?d=gallery&s=solid
      return {
        dashboard: 'tachometer-alt',
        manager: 'cog',
        'manager-control': 'scroll',
        'manager-setting': 'dice-d20'
      }[icon]
    },
    mapVisit(title, store = null) {
      if (title === 'dashboard') {
        return true
      }
      const list = {}
      if (!list[title]) {
        return true
      }
      const roles = store
        ? store.state.user.roles
        : this.$store.state.user.roles
      if (
        roles.some(_ => ~['big-boss', 'medium-boss', 'small-boss'].indexOf(_))
      ) {
        return true
      }
      return roles.some(_ => _ === list[title])
    }
  }
}
