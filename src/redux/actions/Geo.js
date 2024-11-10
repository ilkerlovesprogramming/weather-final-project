import axios from 'axios';

export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';

export const FETCH_STATES_REQUEST = 'FETCH_STATES_REQUEST';
export const FETCH_STATES_SUCCESS = 'FETCH_STATES_SUCCESS';
export const FETCH_STATES_FAILURE = 'FETCH_STATES_FAILURE';

export const FETCH_CITIES_REQUEST = 'FETCH_CITIES_REQUEST';
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS';
export const FETCH_CITIES_FAILURE = 'FETCH_CITIES_FAILURE';

export const fetchCountries = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_COUNTRIES_REQUEST });
    try {
      const response = await axios.get('https://raw.githubusercontent.com/mustafasolak/country_state_city/refs/heads/main/countries.json');
      dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: response.data[2].data });
    } catch (error) {
      dispatch({ type: FETCH_COUNTRIES_FAILURE, error: error.message });
    }
  };
};

export const fetchStates = (countryId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_STATES_REQUEST });
    try {
      const response = await axios.get(`https://raw.githubusercontent.com/mustafasolak/country_state_city/refs/heads/main/states.json`);
      const states = response.data[2].data.filter(state => state.name === countryId);
      dispatch({ type: FETCH_STATES_SUCCESS, payload: states });
    } catch (error) {
      dispatch({ type: FETCH_STATES_FAILURE, error: error.message });
    }
  };
};

export const fetchCities = (stateId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CITIES_REQUEST });
    try {
      const response = await axios.get('https://raw.githubusercontent.com/mustafasolak/country_state_city/refs/heads/main/cities.json');
      const cities = response.data[2].data.filter(city => city.name === stateId);
      dispatch({ type: FETCH_CITIES_SUCCESS, payload: cities });
    } catch (error) {
      dispatch({ type: FETCH_CITIES_FAILURE, error: error.message });
    }
  };
};
