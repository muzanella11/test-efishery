import {
  mapActions,
  mapState
} from 'vuex'
import EfisheryTable from '~/components/tables/template'
import EfisheryTableActionHover from '~/components/table-action-hover/template'
import * as CommodityTypes from '~/store/modules/commodity/types'
import MixinsDateTime from '~/mixins/date-time'

export default {
  components: {
    EfisheryTable,
    EfisheryTableActionHover
  },

  mixins: [
    MixinsDateTime
  ],

  data () {
    return {
      isMobile: false,
      filters: {
        page: 1,
        limit: 5
      },
      limit: 5,
      loadingText: 'loading...',
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'uuid'
        },
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
      entries: state => state.commodity.entries
    })
  },

  mounted () {
    this.init()
  },

  methods: {
    ...mapActions({
      fetchEntries: CommodityTypes.FETCH_COMMODITY_LISTS
    }),

    init () {
      this.fetchEntries()
    },

    onResize () {
      if (window.innerWidth < 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    }
  }
}
