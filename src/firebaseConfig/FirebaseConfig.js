// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	getAuth,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APIKEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// LOGIN
export const onSignIn = async ({ email, password }) => {
	try {
		let res = await signInWithEmailAndPassword(auth, email, password);
		return res;
	} catch (error) {
		console.log(error);
	}
};

//logout
export const logout = () => {
	signOut(auth);
};

//Recuperar contraseña
export const resetPassword = async (email) => {
	try {
		const data = await sendPasswordResetEmail(auth, email);
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const uploadFile = async (file) => {
	const storageRef = ref(storage, v4());
	await uploadBytes(storageRef, file);
	let url = await getDownloadURL(storageRef);
	return url;
};
