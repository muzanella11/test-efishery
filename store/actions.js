import SteinStore from 'stein-js-client'
import * as ROOTTYPES from '~/store/types'

const fetchSteinStore = new SteinStore(
  process.env.baseUrl
)

export default {
  [ROOTTYPES.FETCH_PROVINCES] ({ commit }) {
    return new Promise((resolve, reject) => {
      commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: true })

      fetchSteinStore.read('option_area')
        .then(response => {
          commit(ROOTTYPES.SET_STATE, { accessor: 'provinces', value: response })
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          resolve(response)
        })
        .catch(error => {
          commit(ROOTTYPES.SET_STATE, { accessor: 'provinces', value: [] })
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          reject(error)
        })
    })
  }
}
