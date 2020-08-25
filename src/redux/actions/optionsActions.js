import { GET_OPTIONS, GET_OPTIONS_LOADING, GET_OPTIONS_ERROR, HANDLE_OPTIONS_DROPDOWN } from '../types/optionsTypes';
import { getDocumentFB } from '../../database/firebaseUtils';

export const getOptions = () => async (dispatch) => {
	dispatch({
		type: GET_OPTIONS_LOADING,
		payload: true,
	});
	try {
		const data = await getDocumentFB('/app/options_navbar');
		console.log(data);
		dispatch({
			type: GET_OPTIONS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_OPTIONS_ERROR,
			payload: `${error.message} - Las opciones no se han podido cargar`,
		});
	} finally {
		dispatch({
			type: GET_OPTIONS_LOADING,
			payload: false,
		});
	}
};

export const handleDropdown = () => (dispatch) => dispatch({ type: HANDLE_OPTIONS_DROPDOWN });
