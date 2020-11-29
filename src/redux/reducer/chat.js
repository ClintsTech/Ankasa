import {
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILED,
    GET_ALL_MESSAGE
} from '../type/chat'
const initialState ={
    message:'',
    allMessage:[],
    error:'',
    loading:false,
}

export default ( state = initialState, action ) =>{
    switch (action.type) {
        case SEND_MESSAGE_REQUEST:
            return {
                ...state,
                loading:true
            };
        case SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading:false,
                message:action.item,
                error:''
            }
        case SEND_MESSAGE_FAILED:
            return {
                ...state,
                loading:false,
                error:action.item,
            }
        case GET_ALL_MESSAGE:
            return {
                ...state,
                loading:false,
                allMessage:action.item
            }
    
        default:
            return state;
    }
}