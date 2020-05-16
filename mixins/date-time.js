import moment from 'moment'

export default {
  data () {
    return {
      //
    }
  },

  methods: {
    formattingDate (date) {
      return moment(date).format('DD MMM YYYY')
    }
  }
}
