import {
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILED,
    GET_ALL_MESSAGE
} from '../type/chat'

import URI from '../../utils'

export const sendingMessageRequest = (data) =>{
    return {
        type: SEND_MESSAGE_REQUEST
    }
}
export const sendingMessageSuccess = (data) =>{
    return {
        type: SEND_MESSAGE_SUCCESS,
        item: data.message
    }
}
export const sendingMessageFailed = (data) =>{
    return {
        type: SEND_MESSAGE_FAILED,
        item: data.message
    }
}
export const getAllMessage = (res) =>{
    return {
        type: GET_ALL_MESSAGE,
        item:res
    }
}

export const getAllMessages = (socket) => {
	return (dispatch) => {
		// dispatch(clearAllItems())
		socket.on('refresh-chat',(res)=>{
		   console.log(res)
		   dispatch(getAllMessage(res))
	   })
	}	
}

export const postMessage = (socket,data) => {
	return (dispatch) => {
        socket.emit('postMessage',data)
        dispatch(sendingMessageSuccess(data))		
	}	
}
