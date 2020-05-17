import {
  mapState,
  mapMutations
} from 'vuex'
import * as CommodityTypes from '~/store/modules/commodity/types'
import EfisheryCommodity from '~/components/lists/efishery-commodity/template'

export default {
  components: {
    EfisheryCommodity
  },

  data () {
    return {
      //
    }
  },

  computed: {
    ...mapState({
      filters: state => state.commodity.filters
    })
  },

  mounted () {
    this.init()
  },

  methods: {
    ...mapMutations({
      setStateCommodity: CommodityTypes.SET_STATE
    }),

    init () {
      //
    },

    setInputKey (val) {
      if (val.length > 3 || val.length === 0) {
        this.setStateCommodity({ accessor: 'filters.key', value: val })
      }
    },

    actionCreate () {
      window.location.href = '/commodity/create'
    }
  }
}
