import {
  GET_OPTIONS,
  GET_OPTIONS_LOADING,
  GET_OPTIONS_ERROR
} from "../types/optionsTypes";

export const getOptions = () => async dispatch => {
  dispatch({
    type: GET_OPTIONS_LOADING
  });
  try {
    const data = await fetch(
      "https://my-json-server.typicode.com/ddmgarv/jsons/nav"
    ).then(data => data.json());
    dispatch({
      type: GET_OPTIONS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_OPTIONS_ERROR,
      payload: `${error.message} - Las opciones no se han podido cargar`
    });
  }
};
