
export enum LoadDataActionType {
  LOAD_DATA = "LOAD_DATA",
  LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS",
  LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE"
}
export type LoadDataAction = {
  type: LoadDataActionType.LOAD_DATA,
} | {
  type: LoadDataActionType.LOAD_DATA_SUCCESS,
  data: string,
} | {
  type: LoadDataActionType.LOAD_DATA_FAILURE,
  error: any,
}

export function loadData() {
  return {
    type: LoadDataActionType.LOAD_DATA
  };
}

export function loadDataSuccess(data: any) {
  return {
    type: LoadDataActionType.LOAD_DATA_SUCCESS,
    data,
  };
}

export function loadDataFailure(error: any) {
  return {
    type: LoadDataActionType.LOAD_DATA_FAILURE,
    error,
  };
}