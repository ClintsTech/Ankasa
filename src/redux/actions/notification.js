import Axios from 'axios'
import { URI } from '../../utils'
import { GET_NOTIFICATIONS, POST_NOTIFICATION, CLEAR_NOTIFICATIONS, READ_NOTIFICATION} from '../type/notification'

export const getNotif = token => async dispatch => {
   try {
    const res = await Axios.get(`${URI}/notification/byId`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch({ type: GET_NOTIFICATIONS, payload: res.data.data.data })
   } catch (error) {
       
   }
}

export const clearNotif = token => async dispatch => {
    try {
        await Axios.delete(`${URI}/notification`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    
        dispatch({ type: CLEAR_NOTIFICATIONS })
        dispatch(getNotif(token))
    } catch (error) {
        
    }
}

export const readNotif = (id, token) => async dispatch => {
    try {
        await Axios.patch(`${URI}/notification/byId/${id}`)

        dispatch({ type: READ_NOTIFICATION })
        dispatch(getNotif(token))
    } catch (error) {
        
    }
}