import { call, put, takeEvery } from 'redux-saga/effects';
import * as _ from 'lodash';
import { actionTypes } from './store';
import { PayloadAction } from '../../types';
import { helloWorldService } from '../../services';

export default {
  *fetchRequested() {
    yield takeEvery(actionTypes.HELLOWORLD_SERVICE_ACTION, sayHello);
  },
};

function* sayHello({ payload }: PayloadAction<any>) {
  try {
    yield put({ type: actionTypes.HELLOWORLD_SET_LOADING, payload: true });
    const res = yield call(() => helloWorldService.sayHello(payload));
    const { message } = res;
    yield put({ type: actionTypes.HELLOWORLD_SERVICE_ACTION_SUCCEED, payload: message });
  } catch (err) {
    const error = _.get(err, 'response.data.message');
    yield put({ type: actionTypes.HELLOWORLD_SERVICE_ACTION_FAILED, payload: error });
  } finally {
    yield put({ type: actionTypes.HELLOWORLD_SET_LOADING, payload: false });
  }
}
