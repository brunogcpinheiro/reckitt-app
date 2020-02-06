import { SET_USER, LOADING_USER, SET_UNAUTHENTICATED } from "../types";

import { firebaseAuth, firebaseStore } from "../../firebase/init";

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
  // TODO LOCAL STORAGE TOKEN
  //delete axios.defaults.headers.common['Authorization'];
  firebaseAuth
    .signOut()
    .then(() => {
      history.push("/");
    })
    .then(() => dispatch({ type: SET_UNAUTHENTICATED }));
};
