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
    },
    isLoading: {
      type: Boolean,
      default: true
    },
    loadingText: {
      type: String,
      default: 'Loading'
    }
  },

  data () {
    return {
      //
    }
  }
}
