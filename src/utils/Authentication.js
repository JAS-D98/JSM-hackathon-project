import jwt_decode from 'jwt-decode';

export const isAuthenticated = () => {
  const token = localStorage.getItem('schools_mine_access_token');
  if (!token) {
    return false;
  }

  try {
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
};
