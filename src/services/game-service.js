import { api } from 'config/api';

export const createNewGame = async username => {
  const response = await api.post('/games', { username });
  return response;
}
  
export const getGame = async gameId => {
  const response = await api.get(`/games/${gameId}`);
  return response;
}

export const joinGame = async (gameId, username) => {
  const response = await api.post(`/games/${gameId}/join`, { username });
  return response;
}

export const startGame = async (gameId, username) => {
  const response = await api.post(`/games/${gameId}/start`, { username });
  return response;
}

export const getTurn = async (gameId, username) => {
  const response = await api.get(`/games/${gameId}/turn`, { params: { username } });
  return response;
}

export const endTurn = async (value, gameId, username) => {
  const response = await api.post(`/games/${gameId}/end_turn`, { username, drawing_or_guess: { value } });
  return response;
}