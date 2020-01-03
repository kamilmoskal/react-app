import { all } from "redux-saga/effects";
import clockSagas from "./TVShow/OnTheAir/sagas";

function* rootSaga() {
    yield all([
        ...clockSagas,
    ]);
}

export default rootSaga;