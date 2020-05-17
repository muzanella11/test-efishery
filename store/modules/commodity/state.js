// import * as GLOBAL from './types'

export default () => ({
  entries: [],
  filters: {
    key: '',
    page: 1,
    limit: 5
  },
  dialogDelete: false,
  dataDialog: {
    uuid: '',
    komoditas: '',
    area_provinsi: '',
    area_kota: '',
    price: '',
    size: ''
  },
  commoditySize: []
})
