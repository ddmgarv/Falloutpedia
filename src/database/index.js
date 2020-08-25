import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyD9noGSb-lroyI1_83mI0J0z2g2DVcP30M',
	authDomain: 'falloutpedia.firebaseapp.com',
	databaseURL: 'https://falloutpedia.firebaseio.com',
	projectId: 'falloutpedia',
	storageBucket: 'falloutpedia.appspot.com',
	messagingSenderId: '147176030508',
	appId: '1:147176030508:web:4692060e9c42354b572c89',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Using a popup.
const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('profile');
provider.addScope('email');

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const storage = firebase.storage();

export const signInWithGoogle = () =>
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function (result) {
			// This gives you a Google Access Token.
			const token = result.credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			return {
				token,
				user,
			};
		});

export const createUserProfileDocument = async (userAuth, additionalData = {}) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const user = await userRef.get();
	if (!user.exists) {
		console.log('here creating');
		const { displayName, email } = userAuth;
		try {
			await userRef.set({
				displayName,
				email,
				created_dt: new Date(),
				...additionalData,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}
	return userRef;
};

export default firebase;
