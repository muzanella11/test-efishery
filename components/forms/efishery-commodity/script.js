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
import EfisheryDialogDelete from '~/components/dialogs/efishery-delete-commodity/template'
import MixinsSnackbar from '~/mixins/snackbar'

export default {
  mixins: [
    MixinsSnackbar
  ],

  components: {
    EfisheryCommodity,
    EfisherySelectProvince,
    EfisherySelectCommoditySize,
    EfisheryDialogDelete
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
      return this.isLoading || this.pageName === 'detail'
    },

    routeName () {
      return this.$route.name
    },

    paramsId () {
      return this.$route.params.id
    },

    pageName () {
      if (this.routeName === 'commodity-id') {
        return 'detail'
      }

      if (this.routeName === 'commodity-id-edit') {
        return 'edit'
      }

      return 'create'
    },

    formTitle () {
      const wording = 'Komoditas'

      if (this.pageName === 'detail') {
        return `Data ${wording}`
      }

      if (this.pageName === 'edit') {
        return `Update ${wording}`
      }

      return `Tambah ${wording}`
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    ...mapActions({
      createCommodity: CommodityTypes.CREATE_COMMODITY,
      updateCommodity: CommodityTypes.UPDATE_COMMODITY,
      deleteCommodity: CommodityTypes.DELETE_COMMODITY,
      fetchDetail: CommodityTypes.FETCH_COMMODITY_DETAIL
    }),

    ...mapMutations({
      setStateCommodity: CommodityTypes.SET_STATE,
      setStateRoot: RootTypes.SET_STATE
    }),

    init () {
      this.createId()

      if (this.paramsId) {
        this.fetchDetail(this.paramsId)
          .then(res => {
            this.mappingEntry(res)
          })
          .catch(() => {
            this.openSnackbar('Data tidak ditemukan :(', 'error', 8000)

            window.location.href = '/commodity'
          })
      }
    },

    mappingEntry (response) {
      const data = response[0]

      this.entry = Object.assign(this.entry, {
        administrative: {
          province: data.area_provinsi,
          city: data.area_kota
        },
        size: data.size,
        komoditas: data.komoditas,
        price: data.price
      })

      this.setStateCommodity({
        accessor: 'dataDialog',
        value: {
          uuid: data.uuid,
          area_provinsi: data.area_provinsi,
          area_kota: data.area_kota,
          size: data.size,
          komoditas: data.komoditas,
          price: data.price
        }
      })
    },

    createId () {
      if (this.paramsId) {
        this.entry.id = this.paramsId

        return true
      }

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

    update () {
      const data = {
        id: this.entry.id,
        data: {
          uuid: this.entry.id,
          komoditas: this.entry.komoditas,
          area_provinsi: this.entry.administrative.province,
          area_kota: this.entry.administrative.city,
          size: this.entry.size,
          price: this.entry.price
        }
      }

      this.updateCommodity(data)
        .then(() => {
          this.openSnackbar('Berhasil mengubah data!')

          window.location.href = '/commodity'
        })
        .catch(() => {
          this.openSnackbar('Gagal mengubah data!', 'error')
        })
    },

    delete () {
      this.deleteCommodity(this.entry.id)
        .then(() => {
          this.openSnackbar('Berhasil menghapus data!')

          window.location.href = '/commodity'
        })
        .catch(() => {
          this.openSnackbar('Gagal menghapus data!', 'error')
        })
    },

    actionCancel () {
      window.location.href = '/commodity'
    },

    actionUpdate () {
      window.location.href = `/commodity/${this.paramsId}/edit`
    },

    actionSubmit () {
      this.submit()
    },

    actionSubmitUpdate () {
      this.update()
    },

    actionDelete () {
      this.setStateCommodity({ accessor: 'dialogDelete', value: true })
    }
  }
}
