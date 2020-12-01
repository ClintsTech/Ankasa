import Axios from 'axios'
import { URI } from '../../utils'
import { POST_BOOKING, GET_BOOKING, SPESIFIC_BOOKING } from '../type/booking'

export const postBooking = (data, token) => async dispatch => {
    const res = await Axios.post(`${URI}/booking/add`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch({ type: POST_BOOKING, payload: res.data.data })
}

export const getBooking = (token) => async dispatch => {
    const res = await Axios.get(`${URI}/booking/user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch({ type: GET_BOOKING, payload: res.data.data })
}

export const getBookingById = (id, token) => async dispatch => {
    try {
        const res = await Axios.get(`${URI}/booking/specific/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    
        dispatch({ type: SPESIFIC_BOOKING, payload: res.data.data.data[0] })
    } catch (error) {
        console.log(error.message)
    }
}

