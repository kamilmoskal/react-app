import { combineReducers } from "redux";
import clockReducer from "./test/reducer";


const rootReducer = combineReducers({
    clock: clockReducer,
});

export default rootReducer;