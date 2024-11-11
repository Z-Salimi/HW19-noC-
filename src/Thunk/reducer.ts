import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, ActionTypes } from './action';

interface State {
  loading: boolean;
  data: any[];
  error: string | null;
}

const initialState: State = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case FETCH_DATA_FAILURE:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

export default reducer;
