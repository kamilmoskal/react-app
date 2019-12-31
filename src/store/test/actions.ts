import { TV_list_on_the_air } from 'src/api/models';
import { AxiosError } from 'axios';

export enum LoadDataActionType {
  LOAD_DATA = "LOAD_DATA",
  LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS",
  LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE"
}
export type LoadDataAction = {
  type: LoadDataActionType.LOAD_DATA,
} | {
  type: LoadDataActionType.LOAD_DATA_SUCCESS,
  data: TV_list_on_the_air,
} | {
  type: LoadDataActionType.LOAD_DATA_FAILURE,
  error: AxiosError,
}

export function loadData() {
  return {
    type: LoadDataActionType.LOAD_DATA
  };
}

export function loadDataSuccess(data: TV_list_on_the_air) {
  return {
    type: LoadDataActionType.LOAD_DATA_SUCCESS,
    data,
  };
}

export function loadDataFailure(error: AxiosError) {
  return {
    type: LoadDataActionType.LOAD_DATA_FAILURE,
    error,
  };
}