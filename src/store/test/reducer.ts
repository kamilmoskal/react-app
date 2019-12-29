import { LoadDataAction, LoadDataActionType } from "./actions";

const initialState = {
    test: true
};

const reducer = (state = initialState, action: LoadDataAction) => {
    switch (action.type) {
        case LoadDataActionType.LOAD_DATA:
            return state
        case LoadDataActionType.LOAD_DATA_SUCCESS:
            return {
                test: false,
                data: action.data,
            }
        case LoadDataActionType.LOAD_DATA_FAILURE:
            return state
        default:
        return state
    }
};

export default reducer;