import { SET_USER, LOADING_USER } from "../types";

import { firebaseAuth, firebaseStore } from "../../firebase/init";

export const getUserData = () => dispatch => {
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
