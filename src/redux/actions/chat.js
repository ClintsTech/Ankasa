import {
    GET_LAST_MESSAGE
} from '../type/chat'

import {URI} from '../../utils';
import Axios from 'axios'

export const getLastMessage = (data) =>{
    return {
        type: GET_LAST_MESSAGE,
        payload:data
    }
}


export const getLastMessages = () => async (dispatch)=>{
    try{
        const res = await Axios.get(`${URI}/chat/last-message`)
        dispatch(getLastMessage(res.data.data))
    }catch(e){
        console.log(e)
    }
}
