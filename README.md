# Full Cycle 3.0 - Desafio Docker + Nginx com Node.js

Este projeto é a resolução do desafio prático do módulo de Docker do curso **Full Cycle**. O objetivo é demonstrar a orquestração de contêineres utilizando o Docker Compose, configurando um servidor Nginx como proxy reverso para uma aplicação Node.js que se comunica com um banco de dados MySQL.

## 📝 O que o projeto faz?

Quando você acessa o endereço da aplicação, ocorre o seguinte fluxo:
1. O **Nginx** (Proxy Reverso) recebe a requisição.
2. Ele repassa a chamada para a aplicação **Node.js**.
3. A aplicação se conecta ao **MySQL** e insere um novo registro aleatório (ex: `Person 123`) na tabela `people`.
4. Em seguida, ela consulta todos os registros cadastrados.
5. O resultado é exibido no navegador com o título `<h1>Full Cycle Rocks!</h1>` seguido da lista de nomes salvos no banco.

## 🚀 Como baixar e rodar o projeto

Siga os passos abaixo para testar o projeto localmente:

### 1. Clonar o repositório
```bash
git clone https://github.com/trsenna-garden/vessel-2602-docker-node.git
cd vessel-2602-docker-node
```

### 2. Subir os contêineres
Certifique-se de que o Docker está rodando e execute:
```bash
docker compose up -d --build
```

### 3. Acessar a aplicação
Abra o seu navegador e acesse:
[http://localhost:9000](http://localhost:9000)

> **Nota para o Instrutor:** Embora o enunciado solicite o bind na porta `8080`, este projeto foi configurado na porta **`9000`** para evitar conflitos com outros serviços locais no meu ambiente de desenvolvimento.

## 🏗️ Arquitetura e Tecnologias
- **Nginx:** Atua como Proxy Reverso na porta `9000`.
- **Node.js:** Backend (porta interna `3000`) utilizando a biblioteca `mysql2`.
- **MySQL:** Banco de dados relacional com volume de persistência de dados.
- **Docker Compose:** Gerencia a rede e a inicialização de todos os serviços de forma integrada.
