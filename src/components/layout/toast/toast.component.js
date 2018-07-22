/*
types: ['is-info', 'is-success', 'is-danger', 'is-warning']
this.$root.$emit('toast', { message: 'message', type: 'is-success' })
*/
export default {
  name: 'toast',
  components: { },
  props: {
    timeout: {
      default: 4000,
      type: Number
    }
  },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.$root.$on('toast', data => {
      let toast = {}
      toast.type = data.type ? data.type : 'is-info'
      toast.message = data.message ? data.message : ''
      toast.id = this.getId()
      toast.show = true;
      setTimeout(() => {
         this.remove(toast)
      }, this.timeout);
      this.items.push(toast)
    })
  },
  methods: {
    remove (target) {
      this.items.forEach(item => {
        if (item.id == target.id) {
          item.show = false
        }
      })
    },
    getId () {
      this.items = this.items.filter(item => {
        return item.show
      })
      return this.items.length > 0 ? this.items[this.items.length - 1].id + 1 : 0
    }
  }
}
