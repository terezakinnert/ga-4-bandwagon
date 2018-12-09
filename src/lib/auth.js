export function saveToken(token) {
  localStorage.setItem('bandwagon-token', token);
}

export function getToken() {
  return localStorage.getItem('bandwagon-token');
}

export function decodeToken() {
  const token = getToken();
  if (!token) return {};
  return JSON.parse(atob(token.split('.')[1]));
}

export function deleteToken() {
  localStorage.removeItem('bandwagon-token');
}

export function isAuthenticated() {
  return !!getToken();
}
