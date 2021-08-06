import { LOADING, ERROR } from "./types";

const INITIAL_STATE = {
  loading: false,
  error: null,
  localization: { latitude: 0, longitude: 0 }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: null };
    case ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
