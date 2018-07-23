import LoginService from './login.service'

export default {
  name: 'login',
  components: {},
  props: [],
  data () {
    return {
      userName: '',
      password: '',
      loginService: LoginService()
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    async login () {
      try {
        let user = await this.loginService.login(this.userName, this.password)
        this.loginService.saveUser(user)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
