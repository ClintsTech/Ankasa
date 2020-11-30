import Axios from 'axios'
import { URI } from '../../utils'
import { GET_FLIGHT, FORM_FLIGHT } from '../type/flights'

export const getFlight = (id) => async dispatch => {
    const res = await Axios.get(`${URI}/flight/${id}`)

    dispatch({ type: GET_FLIGHT, payload: res.data.data})
}

export const formFill = data => {
    return {
        type: FORM_FLIGHT,
        payload: data
    }
}