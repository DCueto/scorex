
class UserStore {

  getUser(){
    return JSON.parse(window.localStorage.getItem('user'));
  }

  setUser(user){
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  logOut(){
    window.localStorage.removeItem('user');
  }

  userExists(){
    return window.localStorage.getItem('user') !== null;
  }

  isAuthenticated(){
    return window.localStorage.getItem('user') !== null;
  }

}

export default UserStore;