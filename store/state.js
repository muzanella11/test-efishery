export default () => ({
  layoutSettings: {
    titleApps: null,
    drawer: null,
    toolbar: true,
    breadcrumbVisibility: true,
    breadcrumbs: [],
    pageTitle: null
  },
  isOnline: true,
  isLoading: {
    example: false,
    form: false,
    list: false,
    detail: false,
    family: false,
    medicineUsage: false
  },
  dialog: {
    createPatients: false,
    detailPatients: false,
    updatePatients: false,
    deletePatients: false
  },
  isTimeout: {
    example: false
  }
})
