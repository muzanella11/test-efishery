import {
  mapState,
  mapMutations
} from 'vuex'
import * as CommodityTypes from '~/store/modules/commodity/types'

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

  computed: {
    ...mapState({
      dialogDelete: state => state.commodity.dialogDelete
    })
  },

  methods: {
    ...mapMutations({
      setStateCommodity: CommodityTypes.SET_STATE
    }),

    goToDetail (item) {
      window.location.href = `/commodity/${item.uuid}`
    },

    goToUpdate (item) {
      window.location.href = `/commodity/${item.uuid}/edit`
    },

    goToDelete (item) {
      this.setStateCommodity({ accessor: 'dialogDelete', value: true })
      this.setStateCommodity({ accessor: 'dataDialog', value: item })
    }
  }
}
