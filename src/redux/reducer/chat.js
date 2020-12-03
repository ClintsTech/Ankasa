import {
    GET_LAST_MESSAGE
} from '../type/chat'
const initialState ={
    lastMessage:{},
    error:'',
    loading:false,
}

export default ( state = initialState, action ) =>{
    switch (action.type) {
        case GET_LAST_MESSAGE:
            return {
                ...state,
                loading:false,
                lastMessage:action.payload
            }
    
        default:
            return state;
    }
}