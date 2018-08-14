import FormLoginService from './form-login.service'
import {validationMixin} from 'vuelidate'
import {required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'form-login',
  mixins: [validationMixin],
  components: {},
  props: {},
  data () {
    return {
      userName: '',
      password: '',
      formLoginService: FormLoginService()
    }
  },
  validations: {
    userName: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    async login () {
      if (!this.$v.$invalid) {
        try {
          let user = await this.formLoginService.login(this.userName, this.password)
          this.$emit('loginForm', user)
        } catch (error) {
          this.$root.$emit('toast',{message:error, type:'is-danger'})
        }
      }
    }
  }
}
