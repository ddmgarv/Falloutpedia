import { GET_POWERARMOR, GET_POWERARMOR_LOADING, GET_POWERARMOR_ERROR } from '../types/powerArmorTypes';

const initialState = {
	powerArmorData: [],
	loading: false,
	error: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POWERARMOR:
			return { ...state, powerArmorData: action.payload };

		case GET_POWERARMOR_LOADING:
			return { ...state, loading: action.payload };

		case GET_POWERARMOR_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};
