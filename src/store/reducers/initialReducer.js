import {
  SET_STORES_DATA,
  CLEAR_STORES_DATA,
  SET_CITIES_DATA,
  SET_FLAGS_DATA,
  SET_LOCAL_STORES_DATA,
} from "../types";

const INITIAL_STATE = {
  loading: false,
  statesData: [],
  citiesData: [],
  flagsData: [],
  storesData: [],
};

const initialReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STORES_DATA:
      return {
        ...state,
        loading: true,
        statesData: action.payload,
      };
    case CLEAR_STORES_DATA:
      return INITIAL_STATE;
    case SET_CITIES_DATA:
      return {
        ...state,
        citiesData: action.payload,
      };
    case SET_FLAGS_DATA:
      return {
        ...state,
        flagsData: action.payload,
      };
    case SET_LOCAL_STORES_DATA:
      return {
        ...state,
        storesData: state.flagsData.filter(f => f.id === action.payload),
      };
    default:
      return state;
  }
};

export default initialReducer;
