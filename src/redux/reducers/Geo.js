import { 
  FETCH_COUNTRIES_REQUEST, 
  FETCH_COUNTRIES_SUCCESS, 
  FETCH_COUNTRIES_FAILURE, 
  FETCH_STATES_REQUEST, 
  FETCH_STATES_SUCCESS, 
  FETCH_STATES_FAILURE, 
  FETCH_CITIES_REQUEST, 
  FETCH_CITIES_SUCCESS, 
  FETCH_CITIES_FAILURE 
} from '../actions/Geo';

const initialState = {
  countries: [],
  states: [],
  cities: [],
  loading: false,
  error: null,
};

export const geoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
    case FETCH_STATES_REQUEST:
    case FETCH_CITIES_REQUEST:
      return { ...state, loading: true };
    case FETCH_COUNTRIES_SUCCESS:
      return { ...state, loading: false, countries: action.payload };
    case FETCH_STATES_SUCCESS:
      return { ...state, loading: false, states: action.payload };
    case FETCH_CITIES_SUCCESS:
      return { ...state, loading: false, cities: action.payload };
    case FETCH_COUNTRIES_FAILURE:
    case FETCH_STATES_FAILURE:
    case FETCH_CITIES_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
