import Axios from 'axios'
import { GET_USER, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, EDIT_USER_FAILED, USER_LOGOUT } from '../type/user'
import { URI } from '../../utils'

export const getUser = token => async dispatch => {
    const res = await Axios.get(`${URI}/user`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    dispatch({ type: GET_USER, payload: res.data })
}

export const editUserRequest = () => {
    return {
        type: EDIT_USER_REQUEST
    }
}

export const editUserSuccess = data => {
    return {
        type: EDIT_USER_SUCCESS,
        payload: data

    }
}

export const editUserFailed = error => {
    return {
        type: EDIT_USER_FAILED,
        payload: error
    }
}

export const editUser = (data, token) => async dispatch => {
    dispatch(editUserRequest())
    try {
        const res = await Axios.patch(`${URI}/user/update`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(editUserSuccess(res.data))
        dispatch(getUser(token))
    } catch (error) {
        dispatch(editUserFailed(error.response.data))
    }
}

// export const editPhoto = (data, token) => async dispatch => {
//     dispatch(editUserRequest())
//     try {
//         const res = await Axios.patch(`${URI}/users`, data, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//                 'Content-Type': 'multipart/form-data',
//                 Accept: 'application/json'
//             }
//         })
//         dispatch(editUserSuccess(res.data))
//         dispatch(getUser(token))
//     } catch (error) {
//         dispatch(editUserFailed(error.response.data))
//     }
// }

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}