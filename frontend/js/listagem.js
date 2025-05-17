const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
    drawer: true,
    users: [],
    headers: [
      { text: 'Nome', value: 'name' },
      { text: 'CPF', value: 'cpf' },
      { text: 'Email', value: 'email' },
      { text: 'Ações', value: 'actions', sortable: false },
    ],
    valid: true,
    snackbar: false,
    snackbarMessage: '',
    dialogVisualizar: false,
    dialogEditar: false,
    dialogExcluir: false,
    userSelecionado: { name: '', cpf: '', email: '' },
    userEdit: { id: null, name: '', cpf: '', email: '' },
    userParaExcluir: null,
  }),
  mounted() {
    this.getUsers();
  },
  methods: {
    goTo(page) {
      window.location.href = page;
    },
    async getUsers() {
      try {
        const response = await api.get('/users');
        this.users = response.data;
      } catch (e) {
        console.error('Erro ao buscar usuários:', e);
      }
    },
    viewUser(user) {
      this.userSelecionado = { ...user };
      this.dialogVisualizar = true;
    },
    editUser(user) {
      this.userEdit = { ...user };
      this.dialogEditar = true;
    },
    async salvarEdicao() {
      if (this.$refs.formEditar.validate()) {
        try {
          await api.put(`/users/${this.userEdit.id}`, this.userEdit);
          this.snackbarMessage = 'Usuário atualizado com sucesso!';
          this.snackbar = true;
          this.dialogEditar = false;
          this.getUsers();
        } catch (e) {
          console.error('Erro ao atualizar usuário:', e);
          alert('Erro ao atualizar usuário');
        }
      }
    },
    confirmarExclusao(user) {
      this.userParaExcluir = user;
      this.dialogExcluir = true;
    },
    async excluirUsuarioConfirmado() {
      try {
        await api.delete(`/users/${this.userParaExcluir.id}`);
        this.snackbarMessage = 'Usuário excluído com sucesso!';
        this.snackbar = true;
        this.getUsers();
      } catch (e) {
        console.error('Erro ao excluir usuário:', e);
        alert('Erro ao excluir usuário');
      } finally {
        this.dialogExcluir = false;
        this.userParaExcluir = null;
      }
    }
  }
});