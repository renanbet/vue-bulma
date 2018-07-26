export default {
  name: 'home',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    showToast () {
      this.$root.$emit('toast',{message:'oi', type:'is-success'})
    }
  }
}
