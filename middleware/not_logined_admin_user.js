export default function ({ store, redirect }) {
  if (!store.state.auth.adminUser) {
    console.log('通過のnot_logined_admin_user');// eslint-disable-line no-console
    redirect('/admin/login')
  }
}