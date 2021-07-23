<template>
  <v-layout column justify-center>
    <v-card v-if="adminUsers">
      <v-card-title>
        管理者一覧
        <v-spacer />
        <v-text-field
          v-model="searchText"
          append-icon="mdi-magnify"
          label="検索"
          sigle-line
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="adminUsers"
        :items-per-page="5"
        :search="searchText"
        sort-by="id"
        :sort-desc="true"
        class="elevation-1"
      >
        <template #[`item.edit-action`]="{ item }">
          <v-icon small @click="onClickEditIcon(item)"> mdi-pencil </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'not_logined_admin_user',
  data() {
    return {
      dialogAdminUser: {},
      isShowDialog: false,
      searchText: '',
    }
  },
  async fetch({ store }) {
    const adminUsers = await store.dispatch('adminUsers/fetchList')
    store.commit('adminUsers/setList', adminUsers)
  },
  computed: {
    adminUsers() {
      return this.$store.getters['adminUsers/list']
    },
    headers() {
      return [
        { text: 'ID', value: 'id' },
        { text: 'メールアドレス', value: 'email' },
        { text: '名前', value: 'name' },
        { text: '', value: 'edit-action' },
        { text: '', value: 'delete-action' },
      ]
    },
  },
  methods: {
    onClickEditIcon(adminUser) {
      this.dialogAdminUser = Object.assign({}, adminUser)
      this.isShowDialog = true
    },
  }
}
</script>