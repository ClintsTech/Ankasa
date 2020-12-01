import { EMAIL_FILLED, RESET_FAILED, RESET_REQUEST, RESET_SUCCESS, EMAIL_CHECK } from '../type/forgot'

const initialState = {
    email: '',
    isEmailFilled: false,
    loading: false,
    isSuccess: false,
    isFailed: false,
    messageEmail: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_FILLED:
            return {
                ...state,
                email: action.payload,
                isEmailFilled: true
            }
        case EMAIL_CHECK:
            return {
                ...state,
                messageEmail: action.payload
            }
        case RESET_REQUEST:
            return {
                ...state,
                loading: true
            }
        case RESET_SUCCESS: 
            return {
                ...state,
                loading: false,
                isSuccess: true,
                isFailed: false
            }
        case RESET_FAILED:
            return {
                ...state,
                loading: false,
                isFailed: true,
                isSuccess: false
            }
        default:
            return {
                ...state,
                isSuccess: false,
                isFailed: false
            }
    }
}
