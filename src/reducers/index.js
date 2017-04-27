import { combineReducers } from 'redux';

import coffeeReducer from './coffeeReducer';

const rootReducer = combineReducers({
  coffees: coffeeReducer,
});

export default rootReducer;
