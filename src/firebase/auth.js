import { auth, db } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export const doCreateUserWithEmailAndPassword = async (
  email,
  password,
  firstName,
  lastName,
  phone,
  address,
  gender,
  dob,
  country
) => {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = credential.user;

  // Add user to Firestore
  try {
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      firstName,
      lastName,
      phone,
      address,
      gender,
      dob,
      country,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Error adding user to Firestore: ", error);
  }

  return credential;
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async (
  firstName,
  lastName,
  phone,
  address,
  gender,
  dob,
  country
) => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // Add user to Firestore
  try {
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      firstName,
      lastName,
      phone,
      address,
      gender,
      dob,
      country,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("Error adding user to Firestore: ", error);
  }

  return result;
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

export const doDeleteAccount = async () => {
  try {
    await auth.currentUser.delete();
    // You might want to delete the user document from Firestore here
  } catch (error) {
    console.error("Error deleting user account: ", error);
  }
};
