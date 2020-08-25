import { combineReducers } from 'redux';

import optionsReducer from './optionsReducer';
import powerArmorReducer from './powerArmorReducer';

export default combineReducers({ optionsReducer, powerArmorReducer });
