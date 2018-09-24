import {combineReducers} from 'redux'
import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
  REQUEST_DATA_ERROR,
  SELECT_ITEM,
  CLOSE_MODAL
} from '../actions/actions'


const initialState = {
  isFetching: true,
  isError: false,
  data: [],
  item: {},
  hasItem: false,
  isModalOpen: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true
      }
    case REQUEST_DATA_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        data: action.data.hits
      }
    case REQUEST_DATA_ERROR:
      return {
        ...state,
        isError: true
      }
    case SELECT_ITEM:
      return {
        ...state,
        hasItem: true,
        item: action.item,
        isModalOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false
      }
    default:
      return { ...state }
  }
}

export default combineReducers({reducer})