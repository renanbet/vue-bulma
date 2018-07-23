import BaseService from '@/shared/services/base.service'
import AuthService from '@/shared/auth/auth.service'

class LoginService extends BaseService {
  static instance = null;

  static getInstance () {
    if (LoginService.instance == null) {
      LoginService.instance = new LoginService()
    }
    return LoginService.instance
  }

  constructor () {
    super('/token')
    this.authService = AuthService()
  }

  login (userName, password) {
    return this.generateToken(userName, password)
  }

  generateToken (userName, password) {
    const grantType = 'grant_type=password'
    let user = `username=${encodeURIComponent(userName)}`
    let pass = `password=${encodeURIComponent(password)}`
    let data = `${grantType}&${user}&${pass}`

    return this.post(data)
  }

  saveUser (user) {
    this.authService.saveUser(user)
  }

  removeUser () {
    this.authService.removeUser()
  }

  logout () {
    this.removeUser()
  }
}
export default () => {
  return LoginService.getInstance()
}
