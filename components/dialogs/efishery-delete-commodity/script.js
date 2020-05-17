import {
  mapState,
  mapMutations,
  mapActions
} from 'vuex'
import * as CommodityTypes from '~/store/modules/commodity/types'
import MixinsSnackbar from '~/mixins/snackbar'

export default {
  mixins: [MixinsSnackbar],

  data () {
    return {
      //
    }
  },

  computed: {
    ...mapState({
      dialogDelete: state => state.commodity.dialogDelete,
      dataDialog: state => state.commodity.dataDialog,
      isLoading: state => state.isLoading.form
    })
  },

  methods: {
    ...mapActions({
      deleteData: CommodityTypes.DELETE_COMMODITY
    }),

    ...mapMutations({
      setStateCommodity: CommodityTypes.SET_STATE
    }),

    open () {
      this.setStateCommodity({ accessor: 'dialogDelete', value: true })
    },

    close () {
      this.setStateCommodity({ accessor: 'dialogDelete', value: false })
    },

    actionDelete () {
      this.deleteData(this.dataDialog.uuid)
        .then(() => {
          this.openSnackbar('Berhasil menghapus data', '', 8000)
          window.location.href = '/commodity'
        })
        .catch(() => {
          this.openSnackbar('Gagal menghapus data', 'error', 8000)
        })
    }
  }
}
