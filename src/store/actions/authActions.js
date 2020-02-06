import {
  SET_AUTHENTICATED,
  SET_USER,
  LOADING_USER,
  SET_UNAUTHENTICATED,
} from "../types";

import { firebaseAuth, firebaseStore } from "../../firebase/init";

export const loginUser = (email, password, history) => dispatch => {
  dispatch({ type: LOADING_USER });
  if (email && password) {
    firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: SET_AUTHENTICATED });
        history.push("/initial");
      })
      .catch(err => {
        console.log(err);
      });
  } else {
    alert("Please put your credentials!");
  }
};

export const getUserData = () => dispatch => {
  // TODO LOCAL STORAGE TOKEN
  dispatch({ type: LOADING_USER });
  let currentUser = firebaseAuth.currentUser;

  firebaseStore
    .collection("users")
    .where("user_id", "==", currentUser.uid)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        dispatch({
          type: SET_USER,
          payload: doc.data(),
        });
      });
    })
    .catch(err => console.log(err));
};

export const logoutUser = history => dispatch => {
  firebaseAuth.signOut().then(() => {
    dispatch({ type: SET_UNAUTHENTICATED });
    history.push("/");
  });
};
