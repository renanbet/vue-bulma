import BaseService from '@/shared/services/base.service'

class FormLoginService extends BaseService {
  static instance = null;

  static getInstance () {
    if (FormLoginService.instance == null) {
      FormLoginService.instance = new FormLoginService()
    }
    return FormLoginService.instance
  }

  constructor () {
    super('/token')
  }

  login (userName, password) {
    // const grantType = 'grant_type=password'
    // let user = `username=${encodeURIComponent(userName)}`
    // let pass = `password=${encodeURIComponent(password)}`
    // let data = `${grantType}&${user}&${pass}`
    // return this.post(data)
    return {
      userName,
      'email': 'email',
      'token': 'token'
    }
  }
}
export default () => {
  return FormLoginService.getInstance()
}
