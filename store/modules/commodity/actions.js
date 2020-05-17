import SteinStore from 'stein-js-client'
import * as COMMODITYTYPE from './types'
import * as ROOTTYPES from '~/store/types'

const fetchSteinStore = new SteinStore(
  process.env.baseUrl
)

export default {
  [COMMODITYTYPE.FETCH_COMMODITY_LISTS] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(COMMODITYTYPE.SET_STATE, { accessor: 'entries', value: [] })
      commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.list', value: true })

      let params = {
        limit: payload.limit,
        offset: payload.page - 1,
        search: {}
      }

      if (payload.key) {
        params = Object.assign(params, {
          search: {
            uuid: payload.key
            // komoditas: payload.key // Stein js just support for one params search, not supported for multiple params search :D
          }
        })
      }

      fetchSteinStore.read('list', params)
        .then(response => {
          commit(COMMODITYTYPE.SET_STATE, { accessor: 'entries', value: response })
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.list', value: false })
          resolve(response)
        })
        .catch(error => {
          commit(COMMODITYTYPE.SET_STATE, { accessor: 'entries', value: [] })
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.list', value: false })
          reject(error)
        })
    })
  },

  [COMMODITYTYPE.FETCH_COMMODITY_DETAIL] ({ commit }, id) {
    return new Promise((resolve, reject) => {
      commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: true })

      const params = {
        search: {
          uuid: id
        }
      }

      fetchSteinStore.read('list', params)
        .then(response => {
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          resolve(response)
        })
        .catch(error => {
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          reject(error)
        })
    })
  },

  [COMMODITYTYPE.FETCH_COMMODITY_SIZE] ({ commit }) {
    return new Promise((resolve, reject) => {
      commit(COMMODITYTYPE.SET_STATE, { accessor: 'commoditySize', value: [] })
      commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: true })

      fetchSteinStore.read('option_size')
        .then(response => {
          commit(COMMODITYTYPE.SET_STATE, { accessor: 'commoditySize', value: response })
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          resolve(response)
        })
        .catch(error => {
          commit(COMMODITYTYPE.SET_STATE, { accessor: 'commoditySize', value: [] })
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          reject(error)
        })
    })
  },

  [COMMODITYTYPE.CREATE_COMMODITY] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: true })

      fetchSteinStore.append('list', payload)
        .then(response => {
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          resolve(response)
        })
        .catch(error => {
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          reject(error)
        })
    })
  },

  [COMMODITYTYPE.UPDATE_COMMODITY] ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: true })

      const params = {
        search: {
          uuid: payload.id
        },
        set: payload.data
      }

      fetchSteinStore.edit('list', params)
        .then(response => {
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          resolve(response)
        })
        .catch(error => {
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          reject(error)
        })
    })
  },

  [COMMODITYTYPE.DELETE_COMMODITY] ({ commit }, id) {
    return new Promise((resolve, reject) => {
      commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: true })

      const params = {
        search: {
          uuid: id
        }
      }

      fetchSteinStore.delete('list', params)
        .then(response => {
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          resolve(response)
        })
        .catch(error => {
          commit(ROOTTYPES.SET_STATE, { accessor: 'isLoading.form', value: false })
          reject(error)
        })
    })
  }
}
