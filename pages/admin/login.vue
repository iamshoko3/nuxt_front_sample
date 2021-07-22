<template>
  <section>
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <div>
        <label for="email">email</label>
        <input id="email"  v-model="email" type="text" />
      </div>
      <div>
        <label for="password">password</label>
        <input id="password"  v-model="password" type="password" />
      </div>
      <button type="submit">login</button>
    </form>
  </section>
</template>

<script>
export default {
  layout: 'admin_login',
  middleware: 'logined_admin_user',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      await this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password
      })
      this.$router.push('/admin')
    }
  }
}
</script>