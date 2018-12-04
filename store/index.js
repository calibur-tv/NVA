export const state = () => ({
  user: {}
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  USER_LOGOUT(state) {
    state.user = {}
  },
  UPDATE_USER_INFO(state, { key, value }) {
    state.user[key] = value
  }
}

export const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  avatar: state => state.user.avatar || '',
  name: state => state.user.name || '',
  roles: state => state.user.roles || []
}
