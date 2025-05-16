new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
    drawer: true
  }),
  methods: {
    goTo(page) {
      window.location.href = page;
    }
  }
});