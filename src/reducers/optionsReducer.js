import {
  GET_OPTIONS,
  GET_OPTIONS_LOADING,
  GET_OPTIONS_ERROR
} from "../types/optionsTypes";

const INITIAL_STATE = {
  navData: [],
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_OPTIONS:
      return { ...state, navData: action.payload, loading: false };
    case GET_OPTIONS_LOADING:
      return { ...state, loading: true };
    case GET_OPTIONS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
