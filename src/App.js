import utilities from '@/components/utilities'
import toast from '@/components/layout/toast'

export default {
  name: 'App',
  components: {
    utilities,
    toast
  },
  data () {
    return {
      timeout: 4000,
      menu: [
        {
          to: 'home',
          name: 'Home'
        },
        {
          to: '/',
          name: 'Logout'
        }
      ]
    }
  }
}
