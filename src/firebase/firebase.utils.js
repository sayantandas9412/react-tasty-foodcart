import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC9yO9y00MtKaUoJUkZNynLZBEKwJqO8YI",
  authDomain: "auth-test-8ba2e.firebaseapp.com",
  databaseURL: "https://auth-test-8ba2e.firebaseio.com",
  projectId: "auth-test-8ba2e",
  storageBucket: "auth-test-8ba2e.appspot.com",
  messagingSenderId: "890014285659",
  appId: "1:890014285659:web:17f84d23e3275e46c6647e",
  measurementId: "G-79XMSW6R1N",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error at creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
