# Systock - Sistema de Login e CRUD de Usuários

Sistema simples de login e gerenciamento de usuários utilizando **Laravel + PostgreSQL** no back-end e **Vue.js + Vuetify** no front-end.

---

## Requisitos

- PHP >= 8.1
- Composer
- PostgreSQL
- Python
- Navegador

---

## Instalação do Back-end

### 1. Clone o repositório

```bash
git clone https://github.com/JoaoToga/systock.git
cd systock
```

### 2. Instale as dependências do Laravel

```bash
composer install
```

### 3. Configure o ambiente `.env`

Copie o arquivo `.env.example` e edite com suas configurações de banco PostgreSQL:

```ini
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=seu_banco
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
```

### 4. Execute as migrations

```bash
php artisan migrate
```

### 5. Rode o servidor

```bash
php artisan serve
```

A API estará disponível em:

📍 http://127.0.0.1:8000

---

## Execução do Front-end

### 🔹 Rodar com servidor local (recomendado)

Com Python instalado, suba em um servidor local:

```bash
cd systock/frontend #Pasta onde esta o projeto
python -m http.server 5500
```

E acessar:

http://localhost:5500/index.html

---

## Login

- A autenticação é feita via `POST /api/login`.
- O login bem-sucedido retorna um token de acesso via Laravel Sanctum.
- Após o login, o usuário é redirecionado para a página inicial (`home.html`).

---

## +Informações

- As rotas da API estão em `routes/api.php`
- O CRUD de usuários está no `UserController.php`
- Toda comunicação front ↔ back é feita via Axios e JSON
- Autenticação protegida com middleware `auth:sanctum`

---

## Funcionalidades

- [x] Login com email e senha
- [x] CRUD completo de usuários (Nome, CPF, Email, Senha)
- [x] Validações completas no back-end
- [x] Interface responsiva com Vuetify