import LocalStorageService from '@/shared/local-storage/local-storage.service'

class AuthService {
  static instance = null;

  static getInstance () {
    if (AuthService.instance == null) {
      AuthService.instance = new AuthService()
    }

    return AuthService.instance
  }

  constructor () {
    this.localStorageService = LocalStorageService()
  }

  isAuthenticated () {
    return this.getUser() !== null
  }

  generateUser (name, email, token) {
    return {
      userName: name,
      email,
      access_token: token
    }
  }

  getToken () {
    return this.localStorageService.get('user').access_token
  }

  getUser () {
    return this.localStorageService.get('user')
  }

  getUserName () {
    return this.localStorageService.get('user').userName
  }

  saveUser (user) {
    this.localStorageService.save('user', user)
  }

  removeUser () {
    this.localStorageService.remove('user')
  }

  getHomePage () {
    return 'home'
  }
}
export default () => {
  return AuthService.getInstance()
}
