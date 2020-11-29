import { combineReducers } from 'redux'
import authReducer from './login'
import destinationReducer from './destination'
import userReducer from './user'
import searchReducer from './search'
import registerReducer from './register'

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    register: registerReducer,
    search: searchReducer,
    destination: destinationReducer
})
