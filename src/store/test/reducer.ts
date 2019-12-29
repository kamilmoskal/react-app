import { LoadDataAction, LoadDataActionType } from "./actions";

export interface TestStore {
    test: string
}

const initialState = {
    test: ''
};

const reducer = (state: TestStore = initialState, action: LoadDataAction) => {
    switch (action.type) {
        case LoadDataActionType.LOAD_DATA:
            return state
        case LoadDataActionType.LOAD_DATA_SUCCESS:
            return {
                test: 'dziala chyba',
                data: action.data,
            }
        case LoadDataActionType.LOAD_DATA_FAILURE:
            return state
        default:
        return state
    }
};

export default reducer;