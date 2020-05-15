import { GET_ENTRIES_FEATURE } from './types'

export default {
  [GET_ENTRIES_FEATURE] (state) {
    return state.entries
  }
}
