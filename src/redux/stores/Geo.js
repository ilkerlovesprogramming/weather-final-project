import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { geoReducer } from '../reducers/Geo';

const rootReducer = combineReducers({
  geo: geoReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;