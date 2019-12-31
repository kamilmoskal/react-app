import { TV_list_on_the_air } from 'src/api/models';
import { LoadDataAction, LoadDataActionType } from "./actions";

export interface TestStore {
    isLoading: boolean;
    test?: string;
    data?: TV_list_on_the_air;
}

const reducer = (state: TestStore = { isLoading: false }, action: LoadDataAction) => {
    switch (action.type) {
        case LoadDataActionType.LOAD_DATA:
            return {
                isLoading: true,
            }
        case LoadDataActionType.LOAD_DATA_SUCCESS:
            return {
                isLoading: false,
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