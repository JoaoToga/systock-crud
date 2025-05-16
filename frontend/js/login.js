new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    form: {
      email: '',
      password: ''
    },
    error: '',

    // snackbars
    successSnackbar: false,
    successMessage: '',
    errorSnackbar: false,
    errorMessage: '',
    emailRules: [ //validação email
      v => !!v || 'Email é obrigatório', 
      v => /.+@.+\..+/.test(v) || 'Digite um e-mail válido'
    ],
    passwordRules: [//validação pass
    v => !!v || 'Senha é obrigatória',
    v => v.length >= 6 || 'A senha deve possuir no mínimo 6 caracteres'
  ]
  },
  methods: {
    login() {
      axios.post('http://127.0.0.1:8000/api/login', this.form)
        .then(response => {
          this.successMessage = 'Logado com sucesso!';
          this.successSnackbar = true;
          this.error = '';
          this.errorSnackbar = false;
            // Redireciona
            window.location.href = 'home.html';
        })
        .catch(error => {
          if (error.response && error.response.data && error.response.data.message) {
            this.error = error.response.data.message;
            this.errorMessage = error.response.data.message;
          } else {
            this.error = 'Erro ao fazer login.';
            this.errorMessage = 'Erro ao fazer login.';
          }
          this.errorSnackbar = true;
        });
    }
  }
});