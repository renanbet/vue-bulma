import FormLoginService from './form-login.service'
import {validationMixin} from 'vuelidate'
import {required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'form-login',
  mixins: [validationMixin],
  components: {},
  props: [],
  data () {
    return {
      form: {
        userName: '',
        password: '',
      },
      formLoginService: FormLoginService()
    }
  },
  validations: {
    form: {
      userName: {
        required,
        minLength: minLength(4)
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    async login () {
      if (!this.$v.form.$invalid) {
        try {
          let user = await this.formLoginService.login(this.form.userName, this.form.password)
          this.$emit('loginForm', user)
        } catch (error) {
          this.$root.$emit('toast',{message:error, type:'is-danger'})
        }
      }
    }
  }
}
