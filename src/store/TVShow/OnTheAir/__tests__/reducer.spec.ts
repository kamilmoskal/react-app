
import { onTheAirMockData, mockAxiosError } from './mockData';
import * as A from '../actions';
import * as C from '../constants';
import onTheAirReducer from '../reducer';

describe("onTheAirReducer", () => {
    it('should return proper state on getOnTheAirRequest', () => {
        const action: C.OnTheAirAction = A.getOnTheAirRequest();
        const expected = { isLoading: true };
        expect(onTheAirReducer({ isLoading: false }, action)).toEqual(expected);
    })

    it('should return proper state on getOnTheAirSuccess', () => {
        const action: C.OnTheAirAction = A.getOnTheAirSuccess(onTheAirMockData);
        const expected = { isLoading: false, data: onTheAirMockData };
        expect(onTheAirReducer({ isLoading: true }, action)).toEqual(expected);
    })

    it('should return proper state on getOnTheAirFail', () => {
        const action: C.OnTheAirAction = A.getOnTheAirFail(mockAxiosError);
        const expected = { isLoading: false, error: mockAxiosError.message };
        expect(onTheAirReducer({ isLoading: true }, action)).toEqual(expected);
    })
});