export const setLocalToken = token => localStorage.setItem('tokenApp', token);
export const getLocalToken = () => localStorage.getItem('tokenApp');
export const removeLocalToken = () => localStorage.removeItem('tokenApp');