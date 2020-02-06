import bcrypt from "bcryptjs";
import slugify from "slugify";

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

export const signupUser = (userData, history) => () => {
  const { name, email, password } = userData;

  if (name && email && password) {
    let slug = slugify(name, {
      replacement: "-",
      remove: /[$*_+~.()'"!\-:@]/g,
      lower: true,
    });

    let ref = firebaseStore.collection("users").doc(slug);

    ref.get().then(doc => {
      if (doc.exists) {
        alert("Usuário já cadastrado!");
      } else {
        firebaseAuth
          .createUserWithEmailAndPassword(email, password)
          .then(cred => {
            const hash = bcrypt.hashSync(password, 3);
            ref
              .set({
                name,
                email,
                password: hash,
                isAdmin: false,
                user_id: cred.user.uid,
              })
              .then(() => {
                history.push("/");
              });
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  } else {
    alert("Complete all fields!");
  }
};

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

export const logoutUser = history => dispatch => {
  firebaseAuth.signOut().then(() => {
    dispatch({ type: SET_UNAUTHENTICATED });
    history.push("/");
  });
};
