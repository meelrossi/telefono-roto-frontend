import { api } from 'config/api';

export const createNewGame = async username => {
  const response = await api.post('/games', { username: username });
  return response;
}
  
export const getGame = async game_id => {
  const response = await api.get(`/games/${game_id}`);
  return response;
}
