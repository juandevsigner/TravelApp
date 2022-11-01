import {
  LoginWithEmailPassword,
  logoutFirebase,
  registerUser,
  singInWithGoogle,
} from "../../firebase/provider";
import { chekingCredentials, logout, login } from "./";

export const checkingAuthentication = (email, password) => {
  return async dispatch => {
    dispatch(chekingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async dispatch => {
    dispatch(chekingCredentials());
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};

export const startCreatingUser = ({ email, password, displayName }) => {
  return async dispatch => {
    dispatch(chekingCredentials());
    const result = await registerUser({
      email,
      password,
      displayName,
    });
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async dispatch => {
    dispatch(chekingCredentials());
    const result = await LoginWithEmailPassword({ email, password });
    console.log(result);
    if (!result.ok) return dispatch(logout(result));
    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async dispatch => {
    await logoutFirebase();
    dispatch(logout({}));
  };
};
