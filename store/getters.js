import {
  GET_DIALOG_CREATE_PATIENTS,
  GET_DIALOG_DETAIL_PATIENTS,
  GET_DIALOG_UPDATE_PATIENTS,
  GET_DIALOG_DELETE_PATIENTS
} from './types'

export default {
  [GET_DIALOG_CREATE_PATIENTS] (state) {
    return state.dialog.createPatients
  },

  [GET_DIALOG_DETAIL_PATIENTS] (state) {
    return state.dialog.detailPatients
  },

  [GET_DIALOG_UPDATE_PATIENTS] (state) {
    return state.dialog.updatePatients
  },

  [GET_DIALOG_DELETE_PATIENTS] (state) {
    return state.dialog.deletePatients
  }
}
