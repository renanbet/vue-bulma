import navbar from '@/components/layout/navbar'

export default {
  name: 'utilities',
  components: {
    navbar
  },
  data () {
    return {
      show: true,
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
  },
  computed: {

  },
  mounted () {
    this.$root.$on('utilities', show => {
      this.show = show;
    })
  },
  methods: {

  }
}
