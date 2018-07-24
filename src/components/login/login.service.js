import AuthService from '@/shared/auth/auth.service'

class LoginService {
  static instance = null;

  static getInstance () {
    if (LoginService.instance == null) {
      LoginService.instance = new LoginService()
    }
    return LoginService.instance
  }

  constructor () {
    this.authService = AuthService()
  }

  saveFormUser (formUser) {
    const user = this.authService.generateUser(formUser.userName, formUser.email, formUser.token)
    this.authService.saveUser(user)
  }

  saveGoogleUser (googleUser) {
    const profile = googleUser.getBasicProfile()
    const auth = googleUser.getAuthResponse()
    const user = this.authService.generateUser(profile.getName(), profile.getEmail(), auth.id_token)
    this.authService.saveUser(user)
  }

  removeUser () {
    this.authService.removeUser()
  }

  logout () {
    this.removeUser()
  }

  getHomePage () {
    return this.authService.getHomePage()
  }
}
export default () => {
  return LoginService.getInstance()
}
