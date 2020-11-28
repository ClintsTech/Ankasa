import {combineReducers} from 'redux';
import authReducer from './login';
import destinationReducer from './destination';

export default combineReducers({
  auth: authReducer,
  destination: destinationReducer,
});
