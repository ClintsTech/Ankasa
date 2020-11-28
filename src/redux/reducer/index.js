import { combineReducers } from 'redux'
import authReducer from './login'
import destinationReducer from './destination'
import userReducer from './user'
import registerReducer from './register'

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    register: registerReducer,
    destination: destinationReducer
})
