import { SET_STORES_DATA, CLEAR_STORES_DATA, SET_CITY_DATA } from "../types";

import { firebaseStore } from "../../firebase/init";

export const fetchStoresData = () => dispatch => {
  // dispatch({ type: LOADING_USER });
  firebaseStore
    .collection("stores")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        dispatch({ type: SET_STORES_DATA, payload: doc.data() });
      });
    });
};

export const cleanUp = () => dispatch => {
  dispatch({ type: CLEAR_STORES_DATA });
};

export const fetchCityByStateId = id => dispatch => {
  dispatch({ type: SET_CITY_DATA, payload: id });
};
