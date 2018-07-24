import LoginService from './login.service'
import GoogleLogin from './google-login'
import FormLogin from './form-login'

export default {
  name: 'login',
  components: {
    GoogleLogin,
    FormLogin
  },
  props: [],
  data () {
    return {
      loginService: LoginService(),
      googleLogin: true,
      formLogin: true
    }
  },
  computed: {

  },
  mounted () {
    this.loginService.logout()
  },
  methods: {
    loginForm (formUser) {
      this.loginService.saveFormUser(formUser)
      this.goHome()
    },
    loginGoogle (googleUser) {
      this.loginService.saveGoogleUser(googleUser)
      this.goHome()
    },
    goHome () {
      this.$router.push(this.loginService.getHomePage())
    }
  }
}
