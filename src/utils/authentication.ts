import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/config";

const loginWithFirebase = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    alert(error);
    return error;
  }
};

const signUpWithFirebase = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    if (!user) throw new Error("No user is logged in");
    await updateProfile(user.user, { displayName: name });
    return user;
  } catch (error) {
    alert(error);
    return error;
  }
};

const updatePasswordWithFirebase = async (password: string) => {
  try {
    if (!auth.currentUser) throw new Error("No user is logged in");
    await updatePassword(auth.currentUser, password);
    return true;
  } catch (error) {
    alert(error);
    return error;
  }
};

const signoutWithFirebase = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    alert(error);
    return error;
  }
};

export {
  loginWithFirebase,
  signUpWithFirebase,
  updatePasswordWithFirebase,
  signoutWithFirebase,
};
