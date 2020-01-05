import { CallEffect, PutEffect, call, put, ForkEffect, takeLatest } from "redux-saga/effects";
import { getTVShowListOnTheAir } from 'src/api/requests';
import * as A from '../actions';
import * as C from '../constants';
import * as S from '../sagas';
import { onTheAirMockData, mockAxiosError } from './mockData';

describe("getOnTheAirWatcher", () => {
    test('watching GetOnTheAirRequest action', () => {
        const saga: IterableIterator<ForkEffect> = S.getOnTheAirWatcher();
        expect(saga.next().value).toEqual(takeLatest(C.OnTheAirActionType.GetOnTheAirRequest, S.getOnTheAirWorker));
        expect(saga.next().done).toBe(true);
    });
});

describe("getOnTheAirWorker", () => {
    let saga: any /* IterableIterator<PutEffect<C.OnTheAirAction> | CallEffect> */;
    let actual: PutEffect<C.OnTheAirAction> | CallEffect;
    let expected: PutEffect<C.OnTheAirAction> | CallEffect;

    beforeEach(() => {
        saga = S.getOnTheAirWorker();
    })

    test('flow of success scenario', () => {
        actual = saga.next().value;
        expected = call(getTVShowListOnTheAir);

        expect(actual).toEqual(expected);

        actual = saga.next({ data: onTheAirMockData }).value;
        expected = put(A.getOnTheAirSuccess(onTheAirMockData));

        expect(actual).toEqual(expected);
        expect(saga.next().done).toBe(true);
    });

    test('flow of fail scenario', () => {
        actual = saga.next().value;
        expected = call(getTVShowListOnTheAir);

        expect(actual).toEqual(expected);

        actual = saga.throw(mockAxiosError).value;
        expected = put(A.getOnTheAirFail(mockAxiosError));

        expect(actual).toEqual(expected);
        expect(saga.next().done).toBe(true);
    });
});