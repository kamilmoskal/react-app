import { Reducer } from 'redux';
import { combineReducers } from "redux";
import onTheAir from "./TVShow/OnTheAir/reducer";
import { OnTheAirState } from './TVShow/OnTheAir/constants';

export interface Store {
    onTheAir: OnTheAirState
}

const rootReducer: Reducer<Store> = combineReducers({
    onTheAir,
});

export default rootReducer;