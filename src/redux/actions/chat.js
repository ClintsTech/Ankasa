import axios from 'axios'
import {
    SEND_MESSAGE_REQUEST,
    SEND_MESSAGE_SUCCESS,
    SEND_MESSAGE_FAILED,
    GET_ALL_MESSAGE
} from '../type/chat'

import URI from '../../utils'

export const sendingMessageRequest = () =>{
    return {
        type: SEND_MESSAGE_REQUEST
    }
}
export const sendingMessageSuccess = () =>{
    return {
        type: SEND_MESSAGE_SUCCESS
    }
}
export const sendingMessageFailed = () =>{
    return {
        type: SEND_MESSAGE_FAILED
    }
}
export const getAllMessage = () =>{
    return {
        type: GET_ALL_MESSAGE
    }
}
