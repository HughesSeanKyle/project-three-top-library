import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendEmailVerification,
	signOut,
} from 'firebase/auth';
import {
	getFirestore,
	doc,
	setDoc,
	collection,
	getDocs,
	getDoc,
	query,
	where,
} from 'firebase/firestore';
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

async function signUpEmailAndPassword({ email, password, username }) {
	const saltRounds = 10;

	const encryptedPassword = await bcrypt.hash(password, saltRounds);

	try {
		// Create a user with email and password
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			encryptedPassword
		);

		const user = response.user;

		await setDoc(doc(db, 'users', user.uid), {
			email: user.email,
			password: encryptedPassword,
			username: username,
			userID: user.uid,
			emailVerified: false,
		});

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

// const userData = {
// 	email: 'khughessean001@yahoo.com',
// 	password: '@Test12345',
// 	username: 'testingFromFile_2',
// };

// (async () => {
// 	await signUpEmailAndPassword(userData);
// })();

// Get user by email
async function fetchUserProfileByEmail(email) {
	try {
		const docRef = query(collection(db, 'users'), where('email', '==', email));
		const querySnapshot = await getDocs(docRef);

		if (querySnapshot.empty) {
			console.log('No such user with email:', email);
			return {
				data: null,
				error: `No such user with email: ${email}`,
			};
		} else {
			const userDoc = querySnapshot.docs[0];
			const userRef = doc(db, 'users', userDoc.id);
			const userSnap = await getDoc(userRef);
			console.log('User data:', userSnap.data());

			return { data: userSnap.data(), error: null };
		}
	} catch (error) {
		console.log('err', error);
		return {
			data: null,
			error: error.message,
		};
	}
}

// fetchUserProfileByEmail('khughessean@yahoo.com');

// Signin (Confirm email verified in Authstate => useEffect)

async function signInEmailAndPassword({ email, password }) {
	try {
		const user = await fetchUserProfileByEmail(email);

		console.log('user', user);

		if (!user.data) {
			return {
				data: null,
				error: user.error,
			};
		}

		const encryptedPasswordFromDb = user.data.password;

		bcrypt.compare(
			password,
			encryptedPasswordFromDb,
			async (error, isMatch) => {
				if (isMatch) {
					console.log('Password match');
					const response = await signInWithEmailAndPassword(
						auth,
						email,
						encryptedPasswordFromDb
					);

					console.log('response', response);

					const authenticatedUser = response.user;

					console.log('authenticatedUser', authenticatedUser);

					return {
						data: 'Sign in succesful',
						error: null,
					};
				} else {
					console.log("Password doesn't match");
					if (error) {
						return {
							data: null,
							error: error,
						};
					}

					return {
						data: null,
						error: 'Invalid credentials. Please check your email or password',
					};
				}
			}
		);
	} catch (error) {
		console.error('Error signing in: ', error);
		return {
			data: null,
			error: error.message,
		};
	}
}

// const userData = {
// 	email: 'khughessean@yahoo.com',
// 	password: '@Test1234',
// };

// (async () => {
// 	await signInEmailAndPassword(userData);
// })();

// **Forgot Password

// **SignOut
signOut(auth)
	.then(() => {
		// Sign-out successful.
		console.log('Signed Out');
		// Run redirect from signOut comp, make sure to clear localstorage and session storage on SignOut.
		// Refactor to use data error
	})
	.catch((error) => {
		// An error happened.
		console.log('OOOOOh no, something happened');
	});

// **check authstate logic

// export default app;
