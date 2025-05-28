import express from 'express';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3500;
const ADMIN = 'Admin';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const expressServer = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// Estado dos usuários
const UsersState = {
  users: [],
  setUsers(newUsers) {
    this.users = newUsers;
  },
};

const io = new Server(expressServer, {
  cors: {
    origin:
      process.env.NODE_ENV === 'production'
        ? false
        : ['http://localhost:5500', 'http://127.0.0.1:5500'],
  },
});

io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected`);

  // Boas-vindas ao conectar
  socket.emit('message', buildMsg(ADMIN, 'Bem-vindo ao Chat App!'));

  socket.on('enterRoom', ({ name, room }) => {
    const prevRoom = getUser(socket.id)?.room;

    if (prevRoom) {
      socket.leave(prevRoom);
      io.to(prevRoom).emit(
        'message',
        buildMsg(ADMIN, `${name} saiu da sala`)
      );
      io.to(prevRoom).emit('userList', { users: getUsersInRoom(prevRoom) });
    }

    const user = activateUser(socket.id, name, room);
    socket.join(user.room);

    socket.emit(
      'message',
      buildMsg(ADMIN, `Você entrou na sala ${user.room}`)
    );

    socket.broadcast
      .to(user.room)
      .emit('message', buildMsg(ADMIN, `${user.name} entrou na sala`));

    io.to(user.room).emit('userList', { users: getUsersInRoom(user.room) });

    io.emit('roomList', { rooms: getAllActiveRooms() });
  });

  socket.on('disconnect', () => {
    const user = getUser(socket.id);
    userLeavesApp(socket.id);

    if (user) {
      io.to(user.room).emit(
        'message',
        buildMsg(ADMIN, `${user.name} saiu da sala`)
      );
      io.to(user.room).emit('userList', { users: getUsersInRoom(user.room) });
      io.emit('roomList', { rooms: getAllActiveRooms() });
    }

    console.log(`User ${socket.id} disconnected`);
  });

  socket.on('message', ({ name, text }) => {
    const user = getUser(socket.id);
    if (user && user.room) {
      io.to(user.room).emit('message', buildMsg(name, text));
    }
  });

  socket.on('activity', ({ name }) => {
    const user = getUser(socket.id);
    if (user && user.room) {
      socket.broadcast.to(user.room).emit('activity', { name });
    }
  });
});

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

function activateUser(id, name, room) {
  const user = { id, name, room };
  UsersState.setUsers([
    ...UsersState.users.filter((u) => u.id !== id),
    user,
  ]);
  return user;
}

function userLeavesApp(id) {
  UsersState.setUsers(UsersState.users.filter((u) => u.id !== id));
}

function getUser(id) {
  return UsersState.users.find((u) => u.id === id);
}

function getUsersInRoom(room) {
  return UsersState.users.filter((u) => u.room === room);
}

function getAllActiveRooms() {
  return Array.from(new Set(UsersState.users.map((u) => u.room)));
}
