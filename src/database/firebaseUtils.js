import { firestore } from './index';

export const getDocumentFB = async (ref) => {
	try {
		return (await firestore.doc(ref).get()).data();
	} catch (error) {
		console.error(error);
		return error;
	}
};
