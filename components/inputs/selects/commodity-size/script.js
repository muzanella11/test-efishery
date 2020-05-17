import {
  mapActions,
  mapState
} from 'vuex'
import * as COMMODITYTYPES from '~/store/modules/commodity/types'

export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      selected: '',
      isLoading: false
    }
  },

  computed: {
    ...mapState({
      entries: state => state.commodity.commoditySize
    })
  },

  watch: {
    value: {
      deep: true,
      handler (val) {
        if (val) {
          this.selected = val
        }
      }
    },
    selected: {
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
    ...mapActions({
      fetchCommoditySize: COMMODITYTYPES.FETCH_COMMODITY_SIZE
    }),

    init () {
      this.selected = this.value

      this.fetchResources()
    },

    fetchResources () {
      this.isLoading = true
      this.fetchCommoditySize()
        .then(() => {
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    }
  }
}
