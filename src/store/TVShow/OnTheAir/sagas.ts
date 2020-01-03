import { TVShowListOnTheAir } from 'src/api/models';
import { getTVShowListOnTheAir } from 'src/api/requests';
import { call, put, takeLatest } from "redux-saga/effects";
import * as C from './constants';
import * as A from './actions';

function* getOnTheAirWatcher(){
  yield takeLatest<C.OnTheAirAction>(C.OnTheAirActionType.GetOnTheAirRequest, getOnTheAirRequest)
}

function* getOnTheAirRequest() {
  try {
    const { data }: { data: TVShowListOnTheAir} = yield call(getTVShowListOnTheAir)
    yield put(A.getOnTheAirSuccess(data));
  } catch (error) {
    yield put(A.getOnTheAirFail(error));
  }
}

const sagas = [call(getOnTheAirWatcher)];

export default sagas;