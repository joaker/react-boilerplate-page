/**
 * Gets the repositories of the user from Github
 */

import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import {
  LOAD_MESSAGE,
} from './constants';
import {
  setMessage,
} from './actions';

// import request from 'utils/request';
const request = () => Promise.resolve('A fancy message, as if from an API');

/**
 * Load a message into the reducer (silly saga)
 */
export function* loadMessage() {
  // Select username from store
  try {
    // Call our request helper (see 'utils/request')
    const requestURL = 'http://server.com/path/to/api'
    const message = yield call(request, requestURL);
    yield put(setMessage(message));
  } catch (err) {
    console.log('bad times: ', err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* daemon() {
  // Watches for LOAD_MESSAGE actions and calls loadMessage when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_MESSAGE, loadMessage);
}
