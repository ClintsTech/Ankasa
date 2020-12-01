import Axios from 'axios'
import { URI } from '../../utils'
import { EMAIL_FILLED, RESET_FAILED, RESET_REQUEST, RESET_SUCCESS, EMAIL_CHECK } from '../type/forgot'

export const emailFilled = email => {
    return {
        type: EMAIL_FILLED,
        payload: email
    }
}

export const resetRequest = () => {
    return {
        type: RESET_REQUEST
    }
}

export const resetSuccess = data => {
    return {
        type: RESET_SUCCESS,
        payload: data
    }
}

export const resetFailed = message => {
    return {
        type: RESET_FAILED,
        payload: message
    }
}

export const reset = data => async dispatch => {
    dispatch(resetRequest())
    try {
        const res = await Axios.patch(`${URI}/auth/forgot`, data)
        dispatch(resetSuccess(res.data))
    } catch (error) {
        dispatch(resetFailed(error.message))
    }
}

export const checkEmail = email => async dispatch => {
    const res = await Axios.post(`${URI}/auth/check`, { email })
    
    dispatch({ type: EMAIL_CHECK, payload: res.data.data.message})
}
