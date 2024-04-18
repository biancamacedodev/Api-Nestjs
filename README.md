
# Api 

Esta API é destinada a fornecer funcionalidades básicas para gerenciar carros e proprietários em um sistema de concessionária de automóveis.

## Instalação

Instale api-nestjs com npm.

## 1. Clone este repositório:
 ```bash
  git clone https://github.com/biancamacedodev/Api-Nestjs.git
```
## 2. Navegue até o diretório do projeto:
```bash
cd Api-Nestjs
```
## 3. Instale as dependências:
```bash
npm install
```
 4. Configure o banco de dados no arquivo ormconfig.json conforme necessário.

 ## 5. Execute o projeto:
 ```bash
npm run start
```

 6. O servidor estará disponível em http://localhost:3000.
## Stack utilizada

**Back-end:** 
- Nest.js
- NPM 
- Banco de dados: Mysql


## Funcionalidades


### Carros:

- **Listar Carros**: A API permite listar todos os carros armazenados no sistema, incluindo detalhes como marca, modelo, ano e informações do proprietário, se disponíveis.
- **Buscar Carro por ID**: É possível buscar um carro específico pelo seu ID, retornando todas as informações detalhadas do carro, incluindo seu proprietário, se atribuído.
- **Criar Carro**: Os usuários podem criar um novo registro de carro fornecendo os detalhes necessários, como marca, modelo, ano e opcionalmente o ID do proprietário.
- **Atualizar Carro**: Os usuários podem atualizar os detalhes de um carro existente, incluindo a alteração do proprietário atribuído.
- **Remover Carro**: Os usuários têm a opção de remover um carro do sistema. Ao remover um carro, o relacionamento com seu proprietário, se existir, também é removido.

### Proprietários:

- **Listar Proprietários**: A API permite listar todos os proprietários registrados no sistema, incluindo detalhes como nome, sobrenome, idade e uma lista de carros associados a cada proprietário, se houver.
- **Buscar Proprietário por ID**: É possível buscar um proprietário específico pelo seu ID, retornando todas as informações detalhadas do proprietário, incluindo os carros que ele possui.
- **Criar Proprietário**: Os usuários podem adicionar um novo proprietário ao sistema fornecendo detalhes como nome, sobrenome e idade. É possível também associar carros existentes a este proprietário.
- **Atualizar Proprietário**: Os detalhes de um proprietário existente podem ser atualizados conforme necessário, incluindo a adição ou remoção de carros associados.
- **Remover Proprietário**: Os usuários têm a opção de remover um proprietário do sistema. Ao remover um proprietário, todos os carros associados a ele também serão removidos.


## Documentação da API

#### Retorna todos os itens

```http
  GET /carro ou
   GET /proprietario
```
#### Retorna um item

```http
  GET /carro/${id} ou 
  GET /proprietario/${id}
```


