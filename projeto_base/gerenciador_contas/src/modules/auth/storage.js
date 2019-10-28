import { setBearerToken } from '@/http';

//Setar header da requisição
export const setHeaderToken = token => setBearerToken(token);

//manter a token no local storage opara manter logado mesmo após o fecjhamento do navegador
export const getLocalToken = () => localStorage.getItem('token');
export const deleteLocalToken = () => localStorage.removeItem('token');
export const setLocalToken = token => localStorage.setItem('token', token);
