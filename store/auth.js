export const state = () => ({
  adminUser: null
})

export const mutations = {
  setAdminUser (state, adminUser) {
    state.adminUser = adminUser
  }
}

export const actions = {
  async login ({ commit }, { email, password }) {
    const response = await this.$axios.$post('/login', { email, password })
      .catch(err => {
        console.log(err)// eslint-disable-line no-console
      })
    commit('setAdminUser', response)
  }
}