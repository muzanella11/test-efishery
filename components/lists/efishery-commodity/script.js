import {
  mapActions,
  mapState,
  mapMutations
} from 'vuex'
import EfisheryTable from '~/components/tables/template'
import EfisheryTableActionHover from '~/components/table-action-hover/template'
import EfisheryTablePagination from '~/components/table-pagination/template'
import * as CommodityTypes from '~/store/modules/commodity/types'
import MixinsDateTime from '~/mixins/date-time'

export default {
  components: {
    EfisheryTable,
    EfisheryTableActionHover,
    EfisheryTablePagination
  },

  mixins: [
    MixinsDateTime
  ],

  data () {
    return {
      isMobile: false,
      loadingText: 'loading...',
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'uuid'
        },
        { text: 'Komoditas', value: 'komoditas' },
        { text: 'Provinsi', value: 'area_provinsi' },
        { text: 'Kota', value: 'area_kota' },
        { text: 'Ukuran', value: 'size' },
        { text: 'Harga', value: 'price' },
        { text: 'Tanggal', value: 'tgl_parsed' }
      ]
    }
  },

  computed: {
    ...mapState({
      isLoading: state => state.isLoading.list,
      entries: state => state.commodity.entries,
      filters: state => state.commodity.filters
    }),

    pagination () {
      return Object.assign({}, {
        limit: this.filters.limit,
        page: this.filters.page
      })
    }
  },

  watch: {
    filters: {
      deep: true,
      handler (val) {
        if (val) {
          this.fetchResources()
        }
      }
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    ...mapMutations({
      setStateCommodity: CommodityTypes.SET_STATE
    }),

    ...mapActions({
      fetchEntries: CommodityTypes.FETCH_COMMODITY_LISTS
    }),

    init () {
      this.fetchResources()
    },

    fetchResources () {
      this.fetchEntries(this.filters)
    },

    onResize () {
      if (window.innerWidth < 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },

    onPagination (val) {
      const value = Object.assign(this.filters, {
        page: val.page,
        limit: val.limit
      })

      this.setStateCommodity({ accessor: 'filters', value })
    },

    prevAction () {
      this.pagination.page--
    },

    nextAction () {
      this.pagination.page--
    }
  }
}
