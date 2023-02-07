import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
} from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
dotenv.config();

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// ***Logic here***
// Sign Up

async function signUpWithEmailAndPassword({ email, password, username }) {
	const saltRounds = 10;

	const encryptedPassword = await bcrypt.hash(password, saltRounds);

	try {
		// Create a user with email and password
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			encryptedPassword
		);

		// Get the user object from the response
		const user = response.user;

		// Add a new document in collection "cities"
		await setDoc(doc(db, 'users', user.uid), {
			email: user.email,
			password: encryptedPassword,
			username: username,
			userID: user.uid,
			emailVerified: false,
		});

		// Send the user a verification email
		await sendEmailVerification(auth.currentUser);

		console.log('Sign up successful! Verification email sent.');
		return {
			data: 'Sign up successful! Verification email sent.',
			error: null,
		};
	} catch (error) {
		console.error('Error creating user: ', error);
		return {
			data: null,
			error: error.message,
		};
	}
}

const userData = {
	email: 'khughessean@yahoo.com',
	password: '@Test1234',
	username: 'testingFromFile',
};

(async () => {
	await signUpWithEmailAndPassword(userData);
})();

// export default app;
