import { all } from "redux-saga/effects";
import clockSagas from "./test/sagas";

function* rootSaga() {
    yield all([
        ...clockSagas,
    ]);
}

export default rootSaga;