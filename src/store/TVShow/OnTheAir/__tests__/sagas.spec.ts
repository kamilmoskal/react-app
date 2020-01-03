import { CallEffect, PutEffect, call, put } from "redux-saga/effects";
import { getTVShowListOnTheAir } from 'src/api/requests';
import * as A from '../actions';
import * as C from '../constants';
import * as S from '../sagas';
import { onTheAirMockData } from './mockData';

describe("getOnTheAirWorker", () => {
    // let saga: IterableIterator<CallEffect | PutEffect<C.OnTheAirAction>>

    // beforeEach(() => {
    //     saga = S.getOnTheAirWorker();
    // })

    // test('flow of success scenario', () => {
    //     let actual: PutEffect<C.OnTheAirAction> | CallEffect = saga.next().value;
    //     let expected: PutEffect<C.OnTheAirAction> | CallEffect = call(getTVShowListOnTheAir);

    //     expect(actual).toEqual(expected);

    //     actual = saga.next({ data: onTheAirMockData }).value;
    //     expected = put(A.getOnTheAirSuccess(onTheAirMockData));

    //     expect(actual).toEqual(expected);
    //     expect(saga.next().done).toBe(true);
    // });

    test('flow of fail scenario', () => {
        // let actual: PutEffect<C.OnTheAirAction> | CallEffect = saga.next().value;
        // let expected: PutEffect<C.OnTheAirAction> | CallEffect = call(getTVShowListOnTheAir);

        // expect(actual).toEqual(expected);

        // actual = saga.next({ data: onTheAirMockData }).value;
        // expected = put(A.getOnTheAirSuccess(onTheAirMockData));

        // expect(actual).toEqual(expected);
        // expect(saga.next().done).toBe(true);
    });
});