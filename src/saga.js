import axios from 'axios'
import {call, put, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import { 
  requestData,
  requestDataError, 
  requestDataSuccess, 
  START_WATCHING} 
  from './actions/actions'

const url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story'

const loadData = async url => {
  const response = await axios(url)
  return await response.data
}

function* mainSaga() {
  yield takeLatest(START_WATCHING, getData)
}

function* getData() {
  while (true) {
    yield put(requestData())
    try {
      const data = yield call(loadData, url)
      yield put(requestDataSuccess(data))
    }
    catch(e) {
      yield put(requestDataError(e))
    }
    yield delay(10000)
  }
}

export default mainSaga