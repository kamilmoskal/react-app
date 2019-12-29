import { call, put, take, delay, takeLatest } from "redux-saga/effects";

import { loadDataSuccess, loadData, LoadDataActionType, LoadDataAction } from "./actions";

function* getDataWatcher(){
  yield takeLatest<LoadDataAction>(LoadDataActionType.LOAD_DATA, getDataRequest)
}
function* getDataRequest() {
  yield put(loadDataSuccess('test'));
}

const sagas = [call(getDataWatcher)];

export default sagas;