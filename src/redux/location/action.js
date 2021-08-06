import { LOADING, ERROR } from "./types";

export const loading = () => ({ type: LOADING });

export const error = () => ({ type: ERROR });

export const a = () => (dispatch) => {
  dispatch(loading());
  try {
  } catch (error) {
    dispatch(error(`${error}. Please, try it again later`));
  }
};
