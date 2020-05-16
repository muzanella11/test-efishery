export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        rowsPerPage: [1, 5, 10, 1000]
      })
    },
    value: {
      type: Object,
      default: () => ({
        limit: 5,
        page: 1
      })
    },
    totalData: {
      type: Number,
      default: 0
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      entry: {
        limit: 1,
        page: 1
      }
    }
  },

  computed: {
    startData () {
      return this.endData - this.entry.limit + 1
    },

    endData () {
      return this.entry.page * this.entry.limit
    },

    selectedLabel () {
      return this.entry.limit.toString()
    },

    selectDisabled () {
      return this.isLoading
    },

    prevDisabled () {
      return this.entry.page === 1 || this.totalData < this.entry.limit || this.isLoading
    },

    nextDisabled () {
      return this.totalData < this.entry.limit || this.isLoading
    }
  },

  watch: {
    value: {
      deep: true,
      handler (val) {
        if (val) {
          this.entry = Object.assign(this.entry, {
            limit: val.limit,
            page: val.page
          })
        }
      }
    },
    entry: {
      deep: true,
      handler (val) {
        if (val) {
          this.$emit('input', val)
        }
      }
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      this.entry = Object.assign(this.entry, {
        limit: this.value.limit,
        page: this.value.page
      })
    },

    prevAction () {
      this.entry.page--
    },

    nextAction () {
      this.entry.page++
    }
  }
}
