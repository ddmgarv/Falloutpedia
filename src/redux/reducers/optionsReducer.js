import { GET_OPTIONS, GET_OPTIONS_LOADING, GET_OPTIONS_ERROR, HANDLE_OPTIONS_DROPDOWN } from '../types/optionsTypes';

const INITIAL_STATE = {
	navData: {
		options: [],
		games: [],
	},
	loading: false,
	error: '',
	dropdown: false,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_OPTIONS:
			return { ...state, navData: action.payload };
		case GET_OPTIONS_LOADING:
			return { ...state, loading: action.payload };
		case GET_OPTIONS_ERROR:
			return { ...state, error: action.payload };
		case HANDLE_OPTIONS_DROPDOWN:
			return { ...state, dropdown: !state.dropdown };
		default:
			return state;
	}
};
