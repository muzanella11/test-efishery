import {
  mapState,
  mapMutations
} from 'vuex'
import * as ROOTTYPES from '~/store/types'

export default {
  data () {
    return {
      timeout: 5000,
      listTypeColor: [
        'info',
        'warning',
        'success',
        'error'
      ]
    }
  },

  computed: {
    ...mapState({
      isShown: state => state.snackbar.isShown,
      messages: state => state.snackbar.messages,
      color: state => state.snackbar.color
    }),

    snackbarType () {
      if (this.listTypeColor.filter(item => item === this.color).length > 0) {
        return this.color
      }

      return this.listTypeColor[0]
    }
  },

  methods: {
    ...mapMutations({
      setRootState: ROOTTYPES.SET_STATE
    }),

    openSnackbar (messages, typeColor, timeout) {
      this.setRootState({ accessor: 'snackbar.messages', value: messages })
      this.setRootState({ accessor: 'snackbar.color', value: typeColor })
      this.setRootState({ accessor: 'snackbar.isShown', value: true })

      if (timeout) {
        this.timeout = timeout
      }

      setTimeout(() => {
        this.setRootState({ accessor: 'snackbar.isShown', value: false })
      }, this.timeout)
    },

    closeSnackbar () {
      this.setRootState({ accessor: 'snackbar.isShown', value: false })
    }
  }
}
