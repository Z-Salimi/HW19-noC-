import { Dispatch } from 'redux';
import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any[];
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export const fetchDataRequest = (): FetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: any[]): FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): FetchDataFailureAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async (dispatch: Dispatch<FetchDataRequestAction | FetchDataSuccessAction | FetchDataFailureAction>) => {
    dispatch(fetchDataRequest());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch(fetchDataSuccess(response.data));
    } catch (error:any) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export type ActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;
