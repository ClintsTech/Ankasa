import { GET_DESTINATION } from '../type/destination'

const initialState = {
    destination: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DESTINATION:
            return {
                ...state,
                destination: action.payload
            }
        default:
            return {
                ...state
            }
    }
}