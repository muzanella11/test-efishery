import {
  mapState,
  mapMutations,
  mapActions
} from 'vuex'
import { v4 as uuid } from 'uuid'
import moment from 'moment'
import * as CommodityTypes from '~/store/modules/commodity/types'
import * as RootTypes from '~/store/types'
import EfisheryCommodity from '~/components/lists/efishery-commodity/template'
import EfisherySelectProvince from '~/components/inputs/selects/provinces/template'
import EfisherySelectCommoditySize from '~/components/inputs/selects/commodity-size/template'
import MixinsSnackbar from '~/mixins/snackbar'

export default {
  mixins: [
    MixinsSnackbar
  ],

  components: {
    EfisheryCommodity,
    EfisherySelectProvince,
    EfisherySelectCommoditySize
  },

  data () {
    return {
      entry: {
        id: '',
        administrative: {
          province: '',
          city: ''
        },
        size: '',
        komoditas: '',
        price: ''
      }
    }
  },

  computed: {
    ...mapState({
      filters: state => state.commodity.filters,
      isLoading: state => state.isLoading.form
    }),

    disabled () {
      return this.isLoading
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    ...mapActions({
      createCommodity: CommodityTypes.CREATE_COMMODITY
    }),

    ...mapMutations({
      setStateCommodity: CommodityTypes.SET_STATE,
      setStateRoot: RootTypes.SET_STATE
    }),

    init () {
      this.createId()
    },

    createId () {
      this.entry.id = uuid()
    },

    setInputKey (val) {
      if (val.length > 3 || val.length === 0) {
        this.setStateCommodity({ accessor: 'filters.key', value: val })
      }
    },

    setAdministrative (val) {
      this.entry = Object.assign(this.entry, {
        administrative: val
      })
    },

    setCommoditySize (val) {
      this.entry = Object.assign(this.entry, {
        size: val
      })
    },

    submit () {
      const data = []

      data.push({
        uuid: this.entry.id,
        komoditas: this.entry.komoditas,
        area_provinsi: this.entry.administrative.province,
        area_kota: this.entry.administrative.city,
        size: this.entry.size,
        price: this.entry.price,
        tgl_parsed: moment().format(),
        timestamp: moment().valueOf()
      })

      this.createCommodity(data)
        .then(() => {
          this.openSnackbar('Berhasil menambahkan data!')

          window.location.href = '/commodity'
        })
        .catch(() => {
          this.openSnackbar('Gagal menambahkan data!', 'error')
        })
    },

    actionCancel () {
      window.location.href = '/commodity'
    },

    actionSubmit () {
      this.submit()
    }
  }
}
