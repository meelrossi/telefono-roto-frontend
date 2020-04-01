import { api } from 'config/api';

export const createNewGame = async username => {
  const response = await api.post('/games', { username: username });
  return response;
}
  