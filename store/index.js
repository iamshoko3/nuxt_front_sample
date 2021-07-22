export const actions = {
  async nuxtServerInit ({ commit }, { app }) {
    await app.$axios.$get('/current_admin_user')
      .then(adminUser => commit('auth/setAdminUser', adminUser))
      .catch(() => commit('auth/setAdminUser', null))
  }
}