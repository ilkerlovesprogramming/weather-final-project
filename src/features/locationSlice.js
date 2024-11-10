import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCountries = createAsyncThunk('location/fetchCountries', async () => {
  const response = await fetch('https://raw.githubusercontent.com/mustafasolak/country_state_city/refs/heads/main/countries.json');
  const data = await response.json();
  return data;
});

export const fetchStates = createAsyncThunk('location/fetchStates', async () => {
  const response = await fetch('https://github.com/mustafasolak/country_state_city/blob/main/states.json');
  const data = await response.json();
  return data;
});

export const fetchCities = createAsyncThunk('location/fetchCities', async () => {
  const response = await fetch('https://raw.githubusercontent.com/mustafasolak/country_state_city/refs/heads/main/cities.json');
  const data = await response.json();
  return data;
});

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    countries: [],
    states: [],
    cities: [],
    lastFetched: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
      })
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.states = action.payload;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload;
      });
  },
});

export default locationSlice.reducer;
