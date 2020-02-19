import {
  SET_STORES_DATA,
  CLEAR_STORES_DATA,
  SET_CITIES_DATA,
  SET_FLAGS_DATA,
  SET_LOCAL_STORES_DATA,
} from "../types";

const INITIAL_STATE = {
  loading: false,
  storesInfo: [],
  citiesFromState: [],
  flagsFromCity: [],
  storesFromFlag: [],
};

const storesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STORES_DATA:
      return {
        loading: true,
        storesInfo: [...state.storesInfo, action.payload],
      };
    case CLEAR_STORES_DATA:
      return INITIAL_STATE;
    case SET_CITIES_DATA:
      return {
        ...state,
        citiesFromState: action.payload,
      };
    case SET_FLAGS_DATA:
      return {
        ...state,
        flagsFromCity: action.payload,
      };
    case SET_LOCAL_STORES_DATA:
      return {
        ...state,
        storesFromFlag: state.flagsFromCity.filter(
          f => f.id === action.payload
        ),
      };
    default:
      return state;
  }
};

export default storesReducer;
