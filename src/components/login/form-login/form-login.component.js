import FormLoginService from './form-login.service'

export default {
  name: 'form-login',
  components: {},
  props: [],
  data () {
    return {
      userName: '',
      password: '',
      formLoginService: FormLoginService()
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    async login (data) {
      try {
        let user = await this.formLoginService.login(this.userName, this.password)
        this.$emit('formLogin', user)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
