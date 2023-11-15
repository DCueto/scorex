
const localStorage = window.localStorage;

class TokenStorage {
  constructor(storageName){
    this.storageName = storageName;
  }

  tokenExists() {
    return localStorage.getItem(this.storageName) !== null;
  }

  tokenExpired() {
    const token = JSON.parse(localStorage.getItem(this.storageName));
    const { generationTokenDate, expiresIn } = token;
    const currentDate = Date.now();
    const remainingTime = currentDate - generationTokenDate;

    remainingTime >= expiresIn ? true : false;
  }

  getToken(){
    return JSON.parse( localStorage.getItem(this.storageName) ).token;
  }

  setToken(token){
    localStorage.setItem(this.storageName, token);
  }

}

export default TokenStorage;