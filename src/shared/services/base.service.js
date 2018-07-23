import axios from 'axios'
import AuthService from '@/shared/auth/auth.service'

export default class BaseService {
  constructor (path) {
    this.path = path
    this.client = this.getClient()
    this.authService = AuthService()
  }

  getClient () {
    const client = axios.create({
      baseURL: `${process.env.URL_API}`,
      timeout: 30000
    })

    client.interceptors.request.use((config) => {
      let token = this.authService.getUser() ? this.authService.getToken() : null

      if (config.url.indexOf('token') === -1 && token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    })

    return client
  }

  _addInterceptors () {
    this.client.interceptors.request.use(config => {
      return config
    })
  }

  async get () {
    const res = await this.client.get(this.path)
    let data = res.data
    if (!Array.isArray(data)) {
      return [data]
    }

    return data
  }

  post (data, header = null) {
    return this.client.post(this.path, data, header)
  }

  put (data) {
    return this.client.put(data)
  }
}
