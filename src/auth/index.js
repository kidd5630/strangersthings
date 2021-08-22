export function getCurrentUserToken() {
    const user = JSON.parse(localStorage.getItem('userToken'));
    return user;
  }