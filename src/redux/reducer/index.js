import { combineReducers } from 'redux'
import authReducer from './login'

export default combineReducers({
    auth: authReducer
})