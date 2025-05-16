Vue.component('user-form', httpVueLoader('components/UserForm.vue'));

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
});