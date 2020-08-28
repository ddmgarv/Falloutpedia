import { HANDLE_FORM_SUBMIT, HANDLE_FORM_DATA, HANDLE_FORM_LOADING, HANDLE_FORM_ERROR } from '../types/registrationTypes';

export const handleForm = (event = {}) => (dispatch) => {
	const value = event.target?.value;
	const name = event.target?.name;
	return dispatch({
		type: HANDLE_FORM_DATA,
		payload: {
			value,
			name,
		},
	});
};
