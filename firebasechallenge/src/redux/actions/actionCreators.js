/* eslint-disable no-console */
import '../../firebase';
import firebase from 'firebase';
import actionTypes from './actionTypes';

export function login() {
  return async (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    try {
      const { user } = await firebase.auth().signInWithPopup(provider);
      dispatch({
        type: actionTypes.LOGIN,
        userData: user
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function logout() {
  return {
    type: actionTypes.LOGOUT
  };
}
