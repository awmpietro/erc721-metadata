import {
  GET_INTERFACE,
  CALL,
  LOADING
} from "../actionTypes";

const initialState = {

  itf:[],
  data: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INTERFACE:
      return { ...state, itf: action.payload.itf}
    case CALL:
      return { ...state, data: action.payload.data, loading: action.payload.loading}
    case LOADING:
      return { ...state, data: action.payload.loading}
    default:
      return state;
  }
}