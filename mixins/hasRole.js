export default {
  methods: {
    hasRole(name) {
      const roles = this.$store.state.user.roles
      if (roles.some(_ => _ === '幕后主使者')) {
        return true
      }
      return roles.some(_ => _ === name)
    }
  }
}
