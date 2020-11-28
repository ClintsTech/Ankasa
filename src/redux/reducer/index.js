import { combineReducers } from 'redux'
import authReducer from './login'
import destinationReducer from './destination'
import userReducer from './user'

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    destination: destinationReducer
})