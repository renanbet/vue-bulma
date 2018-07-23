import navbar from '@/components/layout/navbar'
import toast from '@/components/layout/toast'

export default {
  name: 'App',
  components: {
    navbar,
    toast
  },
  data () {
    return {
      timeout: 4000
    }
  }
}
