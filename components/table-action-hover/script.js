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
    entry: {
      type: Object,
      default: () => ({})
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
  },

  methods: {
    goToDetail (item) {
      window.location.href = `/commodity/${item.uuid}`
    },

    goToUpdate (item) {
      window.location.href = `/commodity/${item.uuid}/edit`
    }
  }
}
