import { TVShowListOnTheAir } from 'src/api/models';
import { AxiosError } from 'axios';

export enum OnTheAirActionType {
  GetOnTheAirRequest = "TVShow/GET_ON_THE_AIR_REQUEST",
  GetOnTheAirSuccess = "TVShow/GET_ON_THE_AIR_Success",
  GetOnTheAirFail = "TVShow/GET_ON_THE_AIR_Fail",
}
export type OnTheAirAction = {
  type: OnTheAirActionType.GetOnTheAirRequest,
} | {
  type: OnTheAirActionType.GetOnTheAirSuccess,
  data: TVShowListOnTheAir,
} | {
  type: OnTheAirActionType.GetOnTheAirFail,
  error: AxiosError,
}

export interface OnTheAirState {
  isLoading: boolean;
  data?: TVShowListOnTheAir;
  error?: string;
}

export const OnTheAirInitialState: OnTheAirState = {
  isLoading: false
}