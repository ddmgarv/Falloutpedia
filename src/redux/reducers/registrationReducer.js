import { HANDLE_FORM_SUBMIT, HANDLE_FORM_DATA, HANDLE_FORM_LOADING, HANDLE_FORM_ERROR } from '../types/registrationTypes';

const initialState = {
	formSubmitted: false,
	formData: {
		name: '',
		lastName: '',
		tlf: '',
		direction: '',
		dob: '',
	},
	formLoading: false,
	formError: '',
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case HANDLE_FORM_SUBMIT:
			return { ...state, formSubmitted: payload };
		case HANDLE_FORM_DATA:
			return { ...state, formData: { ...state.formData, [payload.name]: payload.value } };
		case HANDLE_FORM_LOADING:
			return { ...state, formLoading: payload };
		case HANDLE_FORM_ERROR:
			return { ...state, formError: payload };
		default:
			return state;
	}
};
