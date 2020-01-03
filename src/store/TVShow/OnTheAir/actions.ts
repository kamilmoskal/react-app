import { AxiosError } from 'axios';
import { TVShowListOnTheAir } from 'src/api/models';
import * as C from './constants';

export const getOnTheAirRequest = (): C.OnTheAirAction => {
  return {
    type: C.OnTheAirActionType.GetOnTheAirRequest
  };
}

export const getOnTheAirSuccess = (data: TVShowListOnTheAir): C.OnTheAirAction => {
  return {
    type: C.OnTheAirActionType.GetOnTheAirSuccess,
    data,
  };
}

export const getOnTheAirFail = (error: AxiosError): C.OnTheAirAction => {
  return {
    type: C.OnTheAirActionType.GetOnTheAirFail,
    error,
  };
}