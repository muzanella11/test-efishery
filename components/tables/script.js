export default {
  props: {
    headers: {
      type: Array,
      default: () => []
    },
    entries: {
      type: Array,
      default: () => []
    },
    limit: {
      type: Number,
      default: 5
    }
  },

  data () {
    return {
      //
    }
  }
}
