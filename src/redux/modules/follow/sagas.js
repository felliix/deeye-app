import * as types from './types'
import { updateFollowSuccess} from '../posts/actions';
import {
  getFollowListFail,
  getFollowListSuccess, removeFollow,
} from './actions'
import { put, takeLatest } from 'redux-saga/effects'

import { apiCallSaga } from '../api'

const getFollowList = apiCallSaga({
  type: types.GET_FOLLOW_LIST,
  method: 'get',
  // allowedParamKeys: ['type', 'search'],
  path: '/followers',
  selectorKey: 'followList',
  success: function*(payload) {
    yield put(getFollowListSuccess(payload))
  },
  fail: function*(payload) {
    yield put(getFollowListFail(payload))
  }
});

const setFollow = apiCallSaga({
  type: types.SET_FOLLOW,
  method: 'post',
  allowedParamKeys: [],
  path: '/follow',
  selectorKey: 'setFollow',
  success: function*(payload, action) {
    if (action.payload.isFollow) {
      if (!action.payload.isPin) {
        yield put(removeFollow(action.payload.follower_id));
      }
    } else {
      yield put(updateFollowSuccess(action.payload.follower_id));
    }
  },
  fail: function*(payload) {
    console.log('payload error', payload)
  }
});

export default function* rootSaga() {
  yield takeLatest(types.GET_FOLLOW_LIST, getFollowList);
  yield takeLatest(types.SET_FOLLOW, setFollow);
}
