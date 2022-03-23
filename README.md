# Boas vindas ao repositório do API de Blogs!


Um aplicação back-end em `Node.js` usando `ORM` com o pacote `sequelize` e autenticação `JWT`.
 
## O projeto

Será desenvolvido uma API RESTFull para gerenciar um CRUD de posts de um blog.

Será possível:
  - Cadastrar um novo usuário
  - Logar com um usuário cadastrado
  - Criar categorias para os posts do blog (apenas usuários autenticados)
  - Criar posts para o blog (apenas usuários autenticados)
  - Ler os posts de todos usuários do blog (apenas usuários autenticados)
  - Editar seus posts dentro do blog (apenas usuários autenticados)

- - -

### Habilidades

 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints com `Express` para consumir os models do banco
 - Utilizar o padrão `REST` no desenvolvimento da API
 - Fazer um `CRUD` com o `ORM`
 - Autenticar usuários e rotas com `JWT`

- - -

### Estrutura

O banco irá contar com:
- Uma tabela para os usuários que desejam se cadastrar na aplicação
- Uma tabela de Categorias para os Posts
- Uma tabela de Posts, que irá guardar todas as informações dos posts realizados na plataforma.

---

### Tecnologias
  - Node.js
  - Express
  - Sequelize
  - JWT
  - MySQL
