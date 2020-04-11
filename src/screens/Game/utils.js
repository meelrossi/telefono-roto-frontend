import socketIOClient from 'socket.io-client';

import { BASE_URL } from 'config/api';

export const connectToSocket = (username, gameId, onGameEvent) => {
  const socket = socketIOClient(BASE_URL);

  socket.on('game_event', data => {
    console.log(`SocketIO Event: ${data.type}`);
    onGameEvent(data.type, data.content);
  });

  socket.emit('join_game', { username, game_id: gameId });

  return socket;
};
