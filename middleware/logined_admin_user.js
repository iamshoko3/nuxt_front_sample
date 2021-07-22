export default function ({ store, redirect }) {
  if (store.state.auth.adminUser) {
    redirect('/admin')
  }
}