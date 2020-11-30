import { combineReducers } from 'redux'
import authReducer from './login'
import destinationReducer from './destination'
import userReducer from './user'
import searchReducer from './search'
import registerReducer from './register'
import chatReducer from './chat'
import flightReducer from './flights'

export default combineReducers({
    auth: authReducer,
    user: userReducer,
    register: registerReducer,
    search: searchReducer,
    flight: flightReducer,
    destination: destinationReducer,
    chat: chatReducer,

})
