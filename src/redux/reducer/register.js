import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED, EMAIL_CHECK } from '../type/register'

const initialState = {
    data: {},
    loading: false,
    isSuccess: false,
    message: '',
    emailChecked: false,
    messageEmail: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHECK:
            return {
                ...state,
                messageEmail: action.payload
            }
        case REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isSuccess: true,
                message: action.payload
            }
        case REGISTER_FAILED:
            return {
                ...state,
                loading: false,
                isSuccess: false,
                message: action.payload
            }
        default:
            return {
                ...state,
                isFormFilled: false
            }
    }
}