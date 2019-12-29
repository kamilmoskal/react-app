import { Reducer } from 'redux';
import { combineReducers } from "redux";
import clockReducer, { TestStore } from "./test/reducer";

export interface Store {
    clock: TestStore
}

const rootReducer: Reducer<Store> = combineReducers({
    clock: clockReducer,
});

export default rootReducer;