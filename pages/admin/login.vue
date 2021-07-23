<template>
  <section>
    <h1 class="display-1 mt-5">管理者ログイン</h1>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="email" label="メールアドレス" />
      <v-text-field v-model="password" type="password" label="パスワード" />
      <v-btn type="submit" class="info">ログイン</v-btn>
    </v-form>
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