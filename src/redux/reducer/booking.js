import { POST_BOOKING, GET_BOOKING, SPESIFIC_BOOKING, PAY_BOOKING } from '../type/booking'

const initialState = {
    message: '',
    dataBooking: [],
    specificBooking: {},
    pay: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POST_BOOKING:
            return {
                ...state,
                message: action.payload.message
            }
        case GET_BOOKING:
            return {
                ...state,
                dataBooking: action.payload
            }
        case SPESIFIC_BOOKING:
            return {
                ...state,
                specificBooking: action.payload
            }
        case PAY_BOOKING:
            return {
                ...state,
                pay: action.payload
            }
        default:
            return {
                ...state,
                pay: {}
            }
    }
}