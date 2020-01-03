import * as C from './constants';

const reducer = (state: C.OnTheAirState = C.OnTheAirInitialState, action: C.OnTheAirAction): C.OnTheAirState => {
    switch (action.type) {
        case C.OnTheAirActionType.GetOnTheAirRequest:
            return {
                isLoading: true,
            }
        case C.OnTheAirActionType.GetOnTheAirSuccess:
            return {
                isLoading: false,
                data: action.data,
            }
        case C.OnTheAirActionType.GetOnTheAirFail:
            return {
                isLoading: false,
                error: action.error.message,
            }
        default:
        return state
    }
};

export default reducer;