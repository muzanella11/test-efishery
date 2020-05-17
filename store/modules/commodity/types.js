// const NAMESPACE = `GLOBAL` // NAMESPACE MUST BE UNIQUE ACCROSS PROJECT
const NAMESPACE = 'COMMODITY'

/** ************************ For Mutations ***************************************/
export const SET_STATE = `${NAMESPACE}_SET_STATE`
/*******************************************************************************/

/** ************************ For Actions ****************************************/
export const FETCH_COMMODITY_LISTS = `${NAMESPACE}_FETCH_COMMODITY_LISTS`
export const FETCH_COMMODITY_DETAIL = `${NAMESPACE}_FETCH_COMMODITY_DETAIL`
export const FETCH_COMMODITY_SIZE = `${NAMESPACE}_FETCH_COMMODITY_SIZE`
export const CREATE_COMMODITY = `${NAMESPACE}_CREATE_COMMODITY`
export const UPDATE_COMMODITY = `${NAMESPACE}_UPDATE_COMMODITY`
/*******************************************************************************/

/** ************************ For Getters ****************************************/
export const GET_ENTRIES_COMMODITES = `${NAMESPACE}_GET_ENTRIES_COMMODITES`
/*******************************************************************************/
