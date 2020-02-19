import {
  SET_STORES_DATA,
  CLEAR_STORES_DATA,
  SET_CITIES_DATA,
  SET_FLAGS_DATA,
  SET_LOCAL_STORES_DATA,
} from "../types";

import { firebaseStore } from "../../firebase/init";

export const fetchStoresData = () => dispatch => {
  // dispatch({ type: LOADING_USER });
  firebaseStore
    .collection("dados-lojas")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        dispatch({
          type: SET_STORES_DATA,
          payload: { ...doc.data(), id: doc.id },
        });
      });
    });
};

export const cleanUp = () => dispatch => {
  dispatch({ type: CLEAR_STORES_DATA });
};

export const fetchCityByStateId = stateId => dispatch => {
  firebaseStore
    .collection("dados-lojas")
    .doc(stateId)
    .collection("cidades")
    .get()
    .then(snapshot => {
      const cities = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
      dispatch({ type: SET_CITIES_DATA, payload: cities });
    });
};

export const fetchFlagsByCityId = (stateId, cityId) => dispatch => {
  firebaseStore
    .collection("dados-lojas")
    .doc(stateId)
    .collection("cidades")
    .doc(cityId)
    .collection("bandeiras")
    .get()
    .then(snapshot => {
      const flags = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
      dispatch({ type: SET_FLAGS_DATA, payload: flags });
    });
};

export const fetchStoresByFlagId = flagId => dispatch => {
  dispatch({ type: SET_LOCAL_STORES_DATA, payload: flagId });
};
