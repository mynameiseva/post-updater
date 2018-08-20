export const REQUEST_DATA = 'REQUEST_DATA'
export const requestData = () => ({type: REQUEST_DATA})

export const REQUEST_DATA_SUCCESS = 'REQUEST_DATA_SUCCESS'
export const requestDataSuccess = data => ({type: REQUEST_DATA_SUCCESS, data})

export const REQUEST_DATA_ERROR = 'REQUEST_DATA_ERROR'
export const requestDataError = e => ({type: REQUEST_DATA_ERROR, e})

export const START_WATCHING = 'START_WATCHING'
export const startWatcher = () => ({type: START_WATCHING})

export const SELECT_ITEM = 'SELECT_ITEM'
export const selectItem = item => ({type: SELECT_ITEM, item})

export const OPEN_MODAL = 'OPEN_MODAL'
export const openModal = () => ({type: OPEN_MODAL})

export const CLOSE_MODAL = 'CLOSE_MODAL'
export const closeModal = () => ({type: CLOSE_MODAL})