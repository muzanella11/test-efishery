import {
  mapActions,
  mapState
} from 'vuex'
import * as ROOTTYPES from '~/store/types'

export default {
  props: {
    value: {
      type: Object,
      default: () => ({
        city: '',
        province: ''
      })
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      selected: {},
      isLoading: false
    }
  },

  computed: {
    ...mapState({
      entries: state => state.provinces
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
      fetchProvinces: ROOTTYPES.FETCH_PROVINCES
    }),

    init () {
      this.selected = this.value

      this.fetchResources()
    },

    fetchResources () {
      this.isLoading = true
      this.fetchProvinces()
        .then(() => {
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    }
  }
}
