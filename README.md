## index.html

Este é um arquivo HTML que define a **interface de um aplicativo de chat em tempo real**, utilizando o Socket.IO para comunicação entre clientes e servidor.

---

## 🧠 `<head>`: Metadados e configurações iniciais

```html
<!DOCTYPE html>
<html lang="pt-BR">
```

* Define o documento como HTML5.
* Define o idioma principal da página como **português brasileiro**.

```html
<head>
  <meta charset="UTF-8" />
```

* Define a **codificação de caracteres** como UTF-8 (suporte para acentuação e outros símbolos).

```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

* Torna a página **responsiva**, ajustando a largura da viewport à largura do dispositivo.

```html
  <title>Chat em Tempo Real</title>
```

* Define o **título da aba do navegador**.

```html
  <link rel="stylesheet" href="styles.css" />
```

* Importa o **arquivo de estilos CSS externo**.

```html
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.min.js"
    integrity="..."
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
```

* Importa o **cliente do Socket.IO** (v4.7.2) de uma CDN, que permite se conectar com o servidor via WebSockets.
* Atributos `integrity`, `crossorigin` e `referrerpolicy` são usados por **motivos de segurança e desempenho**.

```html
  <script defer src="app.js"></script>
```

* Importa o **arquivo JavaScript principal** (`app.js`) com a lógica do cliente.
* O atributo `defer` garante que o script só será executado **após o carregamento completo do HTML**.

---

## 🧱 `<body>`: Estrutura do Chat

```html
<div class="container">
```

* Elemento principal que contém todos os componentes do aplicativo de chat.

---

### 🎫 Header: Formulário de entrada

```html
<header>
  <form class="form-join">
    <input type="text" id="name" maxlength="12" placeholder="Seu nome" required />
```

* Campo de texto para o usuário digitar o **nome de exibição** (limitado a 12 caracteres).

```html
    <select id="room">
      <option value="" disabled selected>Sala</option>
      <option value="Tech">Tech</option>
      <option value="Dev">Dev</option>
      <option value="AI">AI</option>
    </select>
```

* Menu suspenso para o usuário **selecionar a sala** do chat (Tech, Dev ou AI).

```html
    <button id="join" type="submit">Entrar</button>
  </form>
</header>
```

* Botão para **entrar na sala escolhida**. O envio do formulário aciona a conexão via JavaScript (`app.js`).

---

### 💬 Área do Chat

```html
<div class="app">
  <ul class="chat-display"></ul>
</div>
```

* `chat-display`: Local onde as mensagens do chat serão **exibidas dinamicamente** como uma lista.

---

### 👥 Informações adicionais

```html
<div class="info">
  <p class="user-list"></p>
  <p class="room-list"></p>
  <p class="activity"></p>
</div>
```

* `user-list`: exibe os **usuários conectados** na sala.
* `room-list`: exibe as **salas ativas** no momento.
* `activity`: exibe o **status de digitação** ("Fulano está digitando...").

---

### 📤 Formulário de envio de mensagens

```html
<div class="send">
  <form class="form-msg">
    <input type="text" id="message" placeholder="Digite sua mensagem..." required />
    <button type="submit">Enviar</button>
  </form>
</div>
```

* Campo para digitar mensagens.
* Botão **"Enviar"** que dispara um evento JavaScript enviando a mensagem para o servidor.

---

## ✅ Considerações Finais

Este HTML é apenas a **interface (front-end)**. Toda a lógica de interação (conectar, enviar mensagens, receber mensagens, etc.) é controlada pelo arquivo `app.js` e pela lógica do servidor com Socket.IO.

## Styles.css

Abaixo está uma explicação detalhada do **arquivo CSS** que estiliza o chat em tempo real, linha por linha ou por blocos relevantes, para que você entenda cada aspecto visual da interface:

---

## 🎨 RESET GERAL

```css
* {
  margin: 0;
  padding: 0;
}
```

* Remove margem e padding padrão de todos os elementos para evitar inconsistências entre navegadores.

---

## 📦 CONTAINER PRINCIPAL

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to right, #000428, #004e92);
  gap: 10px;
}
```

* **Flexbox** vertical (`flex-direction: column`) que centraliza os elementos na tela.
* Ocupa **100% da altura da viewport**.
* Fundo com **gradiente azul escuro** (moderno e elegante).
* Espaço entre os elementos: `gap: 10px`.

---

## 🧾 FORMULÁRIO DE ENTRADA (Header)

```css
header form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(to right, #00c6ff, #0072ff);
  border-radius: 10px;
  width: 50vw;
  height: 50px;
}
```

* Layout em **linha horizontal** com espaçamento igual entre os itens.
* Fundo com gradiente azul claro.
* Borda arredondada e largura de **50% da viewport**.

```css
header input {
  width: 50%;
}

header select {
  width: 25%;
}
```

* Campo de nome ocupa **metade** da largura.
* Dropdown da sala ocupa **um quarto**.

---

## 💬 ÁREA DO CHAT

```css
.app {
  background: linear-gradient(to right, #00c6ff, #0072ff);
  border-radius: 10px;
  height: 50vh;
  width: 50vw;
  overflow: auto;
}
```

* Área onde as mensagens aparecem.
* Tem **scroll automático** (`overflow: auto`) para visualizar mensagens além do limite da caixa.

---

## 🧠 INFORMAÇÕES EXTRAS (usuários, sala, atividade)

```css
.info {
  width: 50vw;
  height: 50px;
}
```

* Mesmo tamanho da área de chat e do header.
* Será preenchida com textos pelo JavaScript (`.user-list`, `.room-list`, `.activity`).

---

## 🔘 BOTÕES E INPUTS

```css
button {
  width: 20%;
  background: #d3d3d3;
  color: black;
}
```

* Botões com fundo cinza claro e texto preto.

```css
input,
button,
select {
  border-radius: 10px;
  padding: 0.5rem;
}
```

* Estilo comum para inputs, botões e selects: bordas arredondadas e padding interno.

---

## 📤 ENVIO DE MENSAGENS

```css
.send form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50vw;
  height: 50px;
  border-radius: 10px;
  background: linear-gradient(to right, #00c6ff, #0072ff);
}

.send input {
  width: 75%;
}
```

* Campo de envio semelhante ao header.
* Input ocupa 75%, e o botão, os outros 25% (com `button { width: 20%; }`).

---

## 💡 EXIBIÇÃO DAS MENSAGENS (`.chat-display`)

```css
.chat-display {
  list-style-type: none;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: 1rem auto;
  padding: 0;
  display: flex;
  flex-flow: column;
  justify-content: left;
  overflow: auto;
  flex-grow: 1;
}
```

* Lista sem marcadores (`list-style-type: none`).
* Ocupa até **600px de largura**, com layout em coluna (`flex-flow: column`).
* `flex-grow: 1` ajuda a área a expandir conforme necessário.

---

### 📩 Mensagem Individual (`.post` e variantes)

```css
.post {
  background-color: #eee;
  border-radius: 10px;
  padding: 0 0 0.25rem;
  margin: 0.5rem;
  overflow: hidden;
  flex-shrink: 0;
}
```

* Cada mensagem tem fundo cinza claro, margens e padding.
* `flex-shrink: 0` evita que a mensagem seja comprimida se faltar espaço.

```css
.post--left {
  width: 60%;
  align-self: flex-start;
}

.post--right {
  width: 60%;
  align-self: flex-end;
}
```

* Define o **lado da tela** onde a mensagem aparece: esquerda (outra pessoa) ou direita (você).

---

### 🧾 Cabeçalho da Mensagem (`.post__header`)

```css
.post__header {
  color: #fff;
  padding: 0.25rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.post__header--user {
  background-color: darkblue;
}

.post__header--reply {
  background-color: black;
}
```

* Parte de cima da mensagem com nome e hora.
* Cores diferentes dependendo se é sua mensagem (`reply`) ou de outro usuário (`user`).

---

### ✍️ Conteúdo da Mensagem

```css
.post__header--name {
  font-weight: bold;
}

.post__header--time {
  font-size: 0.8rem;
}

.post__text {
  margin-top: 5px;
  color: #333;
  padding: 0.25rem 0.5rem;
}
```

* Nome do usuário em **negrito**, hora em tamanho menor, e mensagem com espaçamento interno.

---

## 👥 Informações dinâmicas

```css
.user-list,
.room-list,
.activity {
  width: 100%;
  min-height: 2.65rem;
  margin: 0 auto;
  max-width: 600px;
  padding: 0.75rem 0.25rem;
  color: white;
}
```

* Apresentam lista de usuários, nome da sala e status de digitação.
* Texto em branco sobre fundo colorido da `.info`.

```css
.activity {
  font-style: italic;
}
```

* Deixa a frase "Fulano está digitando..." em **itálico**.


## app.js
Claro, Eduardo! Abaixo está um **README.md completo e detalhado** para o código que você forneceu. O texto está formatado em Markdown e pode ser colado diretamente em um repositório GitHub.

---

````markdown
# 💬 Real-Time Chat App com Socket.IO

Este projeto é um **chat em tempo real** construído com **JavaScript** no frontend e **Socket.IO** para comunicação WebSocket. Ele permite que usuários entrem em salas, troquem mensagens, vejam quem está online e saibam quando alguém está digitando.

---

## 📁 Estrutura Esperada

Este `README` documenta a **lógica do frontend JavaScript** do app de chat. O backend deve estar rodando com Socket.IO escutando na porta `3500`.

---

## 🚀 Funcionalidades

- Entrar em uma sala de chat com nome personalizado.
- Enviar e receber mensagens em tempo real.
- Ver quem está digitando.
- Listar usuários conectados na sala.
- Listar salas ativas.

---

## 🔧 Conexão com o Servidor

```js
const socket = io('ws://localhost:3500');
````

Conecta ao servidor WebSocket na porta `3500`.

---

## 📤 Enviar Mensagem

```js
function sendMessage(e) {
  e.preventDefault();
  if (nameInput.value && msgInput.value && chatRoom.value) {
    socket.emit('message', {
      name: nameInput.value,
      text: msgInput.value,
    });
    msgInput.value = '';
  }
  msgInput.focus();
}
```

* Envia uma mensagem via evento `message`.
* Esvazia o campo de texto e mantém o foco para facilitar o uso contínuo.

---

## 🔑 Entrar em uma Sala

```js
function enterRoom(e) {
  e.preventDefault();
  if (nameInput.value && chatRoom.value) {
    socket.emit('enterRoom', {
      name: nameInput.value,
      room: chatRoom.value,
    });
  }
}
```

Envia os dados do usuário e da sala para o servidor via evento `enterRoom`.

---

## 🧠 Feedback de Digitação

```js
msgInput.addEventListener('keypress', () => {
  socket.emit('activity', nameInput.value);
});
```

Envia um evento de digitação sempre que o usuário pressiona uma tecla no input da mensagem.

---

## 📩 Receber Mensagens

```js
socket.on('message', (data) => {
  ...
});
```

Renderiza as mensagens recebidas com base em:

* **Usuário atual:** Alinha a mensagem à esquerda.
* **Outros usuários:** Alinha à direita.
* **Admin:** Mensagem sem nome, centralizada.

Aplica classes CSS diferentes para estilização visual.

---

## 🟡 Usuário Está Digitando

```js
socket.on('activity', (name) => {
  activity.textContent = `${name} is typing...`;
  clearTimeout(activityTimer);
  activityTimer = setTimeout(() => {
    activity.textContent = '';
  }, 3000);
});
```

Mostra mensagem de "usuário está digitando" por 3 segundos.

---

## 👥 Lista de Usuários

```js
socket.on('userList', ({ users }) => {
  showUsers(users);
});
```

Atualiza a lista de usuários da sala atual.

```js
function showUsers(users) {
  usersList.textContent = '';
  if (users) {
    usersList.innerHTML = `<em>Users in ${chatRoom.value}:</em>`;
    users.forEach((user, i) => {
      usersList.textContent += ` ${user.name}`;
      if (users.length > 1 && i !== users.length - 1) {
        usersList.textContent += ',';
      }
    });
  }
}
```

---

## 📚 Lista de Salas

```js
socket.on('roomList', ({ rooms }) => {
  showRooms(rooms);
});
```

Exibe as salas ativas no servidor.

```js
function showRooms(rooms) {
  roomList.textContent = '';
  if (rooms) {
    roomList.innerHTML = '<em>Active Rooms:</em>';
    rooms.forEach((room, i) => {
      roomList.textContent += ` ${room}`;
      if (rooms.length > 1 && i !== rooms.length - 1) {
        roomList.textContent += ',';
      }
    });
  }
}
```

---

## 🧩 Elementos HTML Esperados

Certifique-se de que seu HTML contenha os seguintes elementos com as respectivas classes e IDs:

```html
<form class="form-join">...</form>
<form class="form-msg">...</form>
<input id="name" />
<input id="room" />
<input id="message" />
<div class="activity"></div>
<ul class="chat-display"></ul>
<div class="app"></div>
<div class="user-list"></div>
<div class="room-list"></div>
```

---

## 📦 Tecnologias Utilizadas

* JavaScript (ES6)
* HTML5 / CSS3 (estilização não incluída neste README)
* [Socket.IO Client](https://socket.io/)

---

## 🧪 Sugestões de Melhorias

* Modularizar o código JS (dividir lógica em arquivos separados).
* Adicionar validação visual de inputs.
* Melhorar acessibilidade.
* Suporte a emojis.
* Armazenar histórico com backend (ex: MongoDB, PostgreSQL).



### Index.Js

```js
import express from 'express';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
```

* Importa os módulos necessários:

  * `express`: framework para criar o servidor HTTP.
  * `socket.io`: biblioteca para comunicação em tempo real via WebSockets.
  * `path`: utilitário do Node.js para manipular caminhos de arquivos.
  * `fileURLToPath`: converte `import.meta.url` para um caminho de arquivo legível pelo sistema.

```js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

* Define `__dirname` e `__filename` manualmente, pois esses não estão disponíveis nativamente em módulos ES (ECMAScript Modules). Isso é necessário para resolver caminhos como em `require`.

```js
const PORT = process.env.PORT || 3500;
const ADMIN = 'Admin';
```

* Define a porta do servidor (`3500` por padrão).
* Define um nome para o sistema ou usuário administrador (mensagens automáticas).

---

### 🌐 CONFIGURAÇÃO DO SERVIDOR EXPRESS

```js
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
```

* Cria o app Express.
* Serve arquivos estáticos da pasta `/public` (HTML, CSS, JS do front-end).

```js
const expressServer = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
```

* Inicia o servidor na porta definida e exibe uma mensagem de confirmação no terminal.

---

### 👥 ESTADO DOS USUÁRIOS

```js
const UsersState = {
  users: [],
  setUsers(newUsers) {
    this.users = newUsers;
  },
};
```

* Um objeto global que mantém o estado atual dos usuários conectados.
* A função `setUsers` substitui toda a lista de usuários.

---

### 🔌 INICIALIZAÇÃO DO SOCKET.IO

```js
const io = new Server(expressServer, {
  cors: {
    origin:
      process.env.NODE_ENV === 'production'
        ? false
        : ['http://localhost:5500', 'http://127.0.0.1:5500'],
  },
});
```

* Cria uma instância do servidor `Socket.IO` ligada ao servidor Express.
* Define a política CORS para permitir acesso ao Socket somente de domínios autorizados no ambiente de desenvolvimento.

---

### 🧠 LÓGICA PRINCIPAL DO WEBSOCKET

```js
io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected`);
```

* Evento disparado sempre que um novo cliente se conecta via WebSocket.
* `socket.id` é o identificador único da conexão.

#### 📢 Boas-vindas ao usuário

```js
  socket.emit('message', buildMsg(ADMIN, 'Bem-vindo ao Chat App!'));
```

* Envia uma mensagem privada só para o usuário recém-conectado.

#### 🚪 Entrada em sala

```js
  socket.on('enterRoom', ({ name, room }) => {
    const prevRoom = getUser(socket.id)?.room;
```

* Escuta o evento `enterRoom`, que ocorre quando o usuário quer entrar em uma sala específica.
* Verifica se ele já estava em uma sala anterior.

```js
    if (prevRoom) {
      socket.leave(prevRoom);
      io.to(prevRoom).emit('message', buildMsg(ADMIN, `${name} saiu da sala`));
      io.to(prevRoom).emit('userList', { users: getUsersInRoom(prevRoom) });
    }
```

* Se estava em uma sala, ele sai dela e avisa os outros usuários.

```js
    const user = activateUser(socket.id, name, room);
    socket.join(user.room);
```

* Registra o usuário com seu `id`, `nome` e `sala` atual.
* Adiciona o `socket` à sala.

```js
    socket.emit('message', buildMsg(ADMIN, `Você entrou na sala ${user.room}`));
    socket.broadcast.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} entrou na sala`));
```

* Envia mensagens de boas-vindas para ele e notifica os demais da entrada.

```js
    io.to(user.room).emit('userList', { users: getUsersInRoom(user.room) });
    io.emit('roomList', { rooms: getAllActiveRooms() });
  });
```

* Atualiza a lista de usuários na sala.
* Atualiza a lista global de salas ativas para todos.

#### ❌ Desconexão do socket

```js
  socket.on('disconnect', () => {
    const user = getUser(socket.id);
    userLeavesApp(socket.id);
```

* Quando o usuário se desconecta, ele é removido da lista.

```js
    if (user) {
      io.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} saiu da sala`));
      io.to(user.room).emit('userList', { users: getUsersInRoom(user.room) });
      io.emit('roomList', { rooms: getAllActiveRooms() });
    }

    console.log(`User ${socket.id} disconnected`);
  });
```

* Se ele fazia parte de uma sala, essa informação é atualizada para os outros usuários.

#### ✉️ Envio de mensagens

```js
  socket.on('message', ({ name, text }) => {
    const user = getUser(socket.id);
    if (user && user.room) {
      io.to(user.room).emit('message', buildMsg(name, text));
    }
  });
```

* Quando o usuário envia uma mensagem, ela é emitida para todos na mesma sala.

#### ✏️ Indicador de digitação

```js
  socket.on('activity', ({ name }) => {
    const user = getUser(socket.id);
    if (user && user.room) {
      socket.broadcast.to(user.room).emit('activity', { name });
    }
  });
});
```

* Indica para os outros usuários que alguém está digitando (sem incluir ele mesmo).

---

### 🔧 FUNÇÕES AUXILIARES

#### 🧱 Monta uma mensagem com horário formatado

```js
function buildMsg(name, text) {
  return {
    name,
    text,
    time: new Intl.DateTimeFormat('default', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date()),
  };
}
```

* Cria um objeto de mensagem com remetente, conteúdo e horário atual formatado.

#### 👤 Ativa ou atualiza usuário

```js
function activateUser(id, name, room) {
  const user = { id, name, room };
  UsersState.setUsers([
    ...UsersState.users.filter((u) => u.id !== id),
    user,
  ]);
  return user;
}
```

* Se o usuário já existe, ele é atualizado. Caso contrário, é adicionado à lista.

#### 🧹 Remove usuário

```js
function userLeavesApp(id) {
  UsersState.setUsers(UsersState.users.filter((u) => u.id !== id));
}
```

* Remove o usuário da lista ao sair do app.

#### 🔍 Busca usuário pelo ID

```js
function getUser(id) {
  return UsersState.users.find((u) => u.id === id);
}
```

* Retorna os dados de um usuário com base em seu `socket.id`.

#### 👥 Retorna usuários de uma sala

```js
function getUsersInRoom(room) {
  return UsersState.users.filter((u) => u.room === room);
}
```

* Lista os usuários ativos de uma determinada sala.

#### 🏷️ Retorna todas as salas ativas

```js
function getAllActiveRooms() {
  return Array.from(new Set(UsersState.users.map((u) => u.room)));
}
```

* Retorna todas as salas únicas com pelo menos um usuário presente.

---

Se quiser, posso gerar também um fluxograma ou esquema visual para representar o funcionamento geral dessa aplicação. Deseja isso?
