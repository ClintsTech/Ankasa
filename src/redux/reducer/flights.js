import { GET_FLIGHT, FORM_FLIGHT } from '../type/flights'

const initialState = {
    data: {},
    formFlight: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FLIGHT:
            return {
                ...state,
                data: action.payload
            }
        case FORM_FLIGHT:
            return {
                ...state,
                formFlight: action.payload
            }
        default:
            return state
    }
}