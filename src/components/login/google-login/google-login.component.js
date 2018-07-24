export default {
  name: 'google-login',
  components: {},
  props: [],
  data () {
    return {
      googleSignInParams: {
        client_id: process.env.GOOGLE_APP_CLIENT_ID
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onSignInSuccess (googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      this.$emit('loginGoogle', googleUser)
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
