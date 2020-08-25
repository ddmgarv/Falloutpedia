import { GET_POWERARMOR, GET_POWERARMOR_LOADING, GET_POWERARMOR_ERROR } from '../types/powerArmorTypes';
import { getDocumentFB } from '../../database/firebaseUtils';

export const getPowerArmorData = () => async (dispatch) => {
	dispatch({
		type: GET_POWERARMOR_LOADING,
		payload: true,
	});
	try {
		const res = await getDocumentFB('/app/power_armor_section');
		dispatch({
			type: GET_POWERARMOR,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: GET_POWERARMOR_ERROR,
			payload: `${error.message} - Los datos de la sección no se han podido cargar`,
		});
	} finally {
		dispatch({
			type: GET_POWERARMOR_LOADING,
			payload: false,
		});
	}
};
