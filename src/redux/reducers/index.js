import { combineReducers } from 'redux';

import optionsReducer from './optionsReducer';
import powerArmorReducer from './powerArmorReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({ optionsReducer, powerArmorReducer, registrationReducer });
